import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { v4 as uuidv4 } from 'uuid';

interface Message {
  id: string;
  content: string;
  created_at: string;
}

export function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [position, setPosition] = useState({ x: 20, y: 80 });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const dragConstraintsRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(prev => ({
        ...prev,
        y: Math.max(80, window.scrollY + 80)
      }));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('anonymous_messages')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) {
        console.error('Error fetching messages:', error);
        return;
      }

      setMessages(data || []);
    };

    fetchMessages();

    const subscription = supabase
      .channel('anonymous_messages')
      .on('postgres_changes', { 
        event: 'INSERT', 
        schema: 'public', 
        table: 'anonymous_messages' 
      }, payload => {
        setMessages(current => [...current, payload.new as Message]);
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: uuidv4(),
      content: message,
      created_at: new Date().toISOString(),
    };

    const { error } = await supabase
      .from('anonymous_messages')
      .insert([newMessage]);

    if (error) {
      console.error('Error sending message:', error);
      return;
    }

    setMessage('');
  };

  return (
    <div ref={dragConstraintsRef} className="fixed inset-0 pointer-events-none">
      <motion.div
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
        }}
        drag
        dragConstraints={dragConstraintsRef}
        dragMomentum={false}
        dragElastic={0.1}
        onDragEnd={(_, info) => {
          setPosition({
            x: position.x + info.offset.x,
            y: position.y + info.offset.y
          });
        }}
        className="pointer-events-auto"
      >
        {/* Chat Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 flex items-center gap-3 min-w-max"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle size={24} />
          <span className="text-base font-medium">Drop some dump to Prasanth</span>
        </motion.button>

        {/* Chat Box */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute top-16 left-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-50"
            >
              {/* Header */}
              <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <h3 className="font-semibold">Drop some dump to Prasanth</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-4 bg-gray-50">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="bg-white p-3 rounded-lg shadow mb-2"
                  >
                    <p className="text-gray-800">{msg.content}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(msg.created_at).toLocaleString()}
                    </p>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}