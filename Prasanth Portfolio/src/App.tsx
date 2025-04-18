import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Phone, Github, Linkedin, Star, Zap, Trophy, Code, Database, Shield, Brain, Cpu, LineChart, Layout, Terminal, Lock, Coffee } from 'lucide-react';
import { ChatBox } from './components/ChatBox';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [flippedCards, setFlippedCards] = useState<{[key: string]: boolean}>({});

  const toggleCard = (id: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const skillsData = [
    {
      id: 'python',
      title: 'Python',
      icon: <Code className="w-8 h-8" />,
      story: "🐍 Used Python to tame wild data dragons! Built an AI model that could predict student performance with 95% accuracy.",
      level: 85,
      emoji: "🚀"
    },
    {
      id: 'java',
      title: 'Java',
      icon: <Coffee className="w-8 h-8" />,
      story: "☕ Brewed powerful applications with Java! Created a weather app that made meteorologists jealous.",
      level: 80,
      emoji: "☕"
    },
    {
      id: 'data',
      title: 'Data Science',
      icon: <Database className="w-8 h-8" />,
      story: "📊 Turned messy data into beautiful insights. Created visualizations that made stakeholders say 'wow!'",
      level: 80,
      emoji: "🎯"
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      icon: <Brain className="w-8 h-8" />,
      story: "🤖 Trained AI models that learned to see the world through data-tinted glasses!",
      level: 75,
      emoji: "🧠"
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      icon: <Cpu className="w-8 h-8" />,
      story: "🎯 Taught computers to learn from their mistakes, just like we do (but faster)!",
      level: 78,
      emoji: "⚡"
    },
    {
      id: 'powerbi',
      title: 'Power BI',
      icon: <LineChart className="w-8 h-8" />,
      story: "📈 Transformed raw data into stunning visual stories that even executives could understand!",
      level: 82,
      emoji: "📊"
    },
    {
      id: 'react',
      title: 'React',
      icon: <Layout className="w-8 h-8" />,
      story: "⚛️ Built interactive UIs that made users say 'How did they do that?'",
      level: 85,
      emoji: "💫"
    },
    {
      id: 'javascript',
      title: 'JavaScript',
      icon: <Terminal className="w-8 h-8" />,
      story: "🌟 Brought web pages to life with interactive features that users love!",
      level: 80,
      emoji: "✨"
    },
    {
      id: 'security',
      title: 'Cyber Security',
      icon: <Shield className="w-8 h-8" />,
      story: "🔒 Protected systems like a digital superhero! Discovered and patched vulnerabilities before they became threats.",
      level: 75,
      emoji: "🛡️"
    },
    {
      id: 'proxychain',
      title: 'Proxy Chains',
      icon: <Lock className="w-8 h-8" />,
      story: "🌐 Mastered the art of digital invisibility through advanced proxy configurations!",
      level: 70,
      emoji: "🔐"
    }
  ];

  const projectsData = [
    {
      id: 'weather',
      title: 'Weather Web Application',
      tech: ['Java', 'Spring Boot', 'REST API'],
      story: "🌦️ Built a weather app that's so accurate, even the clouds check it before deciding to rain!",
      achievement: "1000+ Daily Users"
    },
    {
      id: 'iphone',
      title: 'iPhone 15 Pro Clone',
      tech: ['React', 'Three.js', 'GSAP'],
      story: "📱 Created a clone so good, people tried to make phone calls on their monitors!",
      achievement: "Featured on Design Forums"
    },
    {
      id: 'sms',
      title: 'Student Management System',
      tech: ['HTML', 'CSS', 'JavaScript'],
      story: "👩‍🎓 Helped transform paper chaos into digital harmony for 500+ students",
      achievement: "Reduced Admin Time by 60%"
    }
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
      section.style.transform = `translateZ(${-100 * index}px)`;
    });
  }, []);

  const cardVariants = {
    front: {
      rotateY: 0,
      transition: { duration: 0.6 }
    },
    back: {
      rotateY: 180,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-[#f8c7c7] text-gray-800 overflow-x-hidden perspective-1000">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8c7c7] bg-opacity-90 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-800 hover:text-blue-600 transition-colors">Home</a>
              <a href="#education" className="text-gray-800 hover:text-blue-600 transition-colors">Education</a>
              <a href="#skills" className="text-gray-800 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#experience" className="text-gray-800 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" className="text-gray-800 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#certifications" className="text-gray-800 hover:text-blue-600 transition-colors">Certifications</a>
            </div>
          </div>
        </div>
      </nav>

      <div ref={containerRef} className="relative preserve-3d">
        {/* Hero Section */}
        <section id="home" className="section min-h-screen flex items-center justify-center relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-4 text-gray-800">Prasanth Damma</h1>
            <h2 className="text-2xl text-gray-600 mb-8">BTech - Data Science and Artificial Intelligence</h2>
            
            <div className="flex items-center justify-center gap-6 mb-12">
              <a href="tel:+916281607337" className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors">
                <Phone size={20} />
                <span>+91 6281607337</span>
              </a>
              <a href="mailto:prasanthdamma10@gmail.com" className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors">
                <Mail size={20} />
                <span>prasanthdamma10@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-4">
              <a href="https://github.com/Saeitoshi69" target="_blank" rel="noopener noreferrer" 
                className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                <Github size={24} className="text-gray-800" />
              </a>
              <a href="https://www.linkedin.com/in/prasanth-damma-334980319/" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                <Linkedin size={24} className="text-gray-800" />
              </a>
            </div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <ChevronDown size={32} className="text-gray-800" />
            </motion.div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="section min-h-screen flex items-center justify-center bg-[#f8c7c7]/50 backdrop-blur">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Education</h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  school: 'Woxsen University',
                  degree: 'BTech - Data Science and AI',
                  year: '2021 - 2025',
                  grade: '72%'
                },
                {
                  school: 'Akash Institute',
                  degree: 'Intermediate',
                  year: '2019 - 2021',
                  grade: '91.3%'
                },
                {
                  school: 'Sri Chaithanya',
                  degree: 'SSC',
                  year: '2016 - 2019',
                  grade: '9.8 CGPA'
                }
              ].map((edu) => (
                <motion.div
                  key={edu.school}
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  className="bg-white/80 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all relative"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{edu.school}</h3>
                      <p className="text-gray-600">{edu.degree}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">{edu.year}</p>
                      <p className="text-blue-600 font-semibold">{edu.grade}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section min-h-screen flex items-center justify-center bg-[#f8c7c7]/50 backdrop-blur">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {skillsData.map((skill) => (
                <div key={skill.id} className="perspective-1000">
                  <motion.div
                    className="relative w-full h-[200px] cursor-pointer"
                    onClick={() => toggleCard(skill.id)}
                    animate={flippedCards[skill.id] ? 'back' : 'front'}
                    variants={cardVariants}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front of card */}
                    <motion.div
                      className="absolute w-full h-full bg-white/90 rounded-xl p-4 flex flex-col items-center justify-center shadow-lg"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className="text-blue-600 mb-2">{skill.icon}</div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800">{skill.title}</h3>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <motion.div
                          className="bg-blue-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 0.3 }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">Click to learn more!</span>
                    </motion.div>

                    {/* Back of card */}
                    <motion.div
                      className="absolute w-full h-full bg-blue-600 rounded-xl p-4 flex flex-col items-center justify-center text-white"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <div className="text-2xl mb-2">{skill.emoji}</div>
                      <p className="text-center text-sm mb-2">{skill.story}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < skill.level/20 ? 'fill-white' : 'fill-transparent'}`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section min-h-screen flex items-center justify-center bg-[#f8c7c7]/50 backdrop-blur">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Industrial Internship</h2>

            <div className="max-w-4xl mx-auto space-y-12">
              {/* Cyber Security Internship */}
              <div className="bg-white/80 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Cyber Security intern</h3>
                <p className="text-xl text-gray-600 mb-6">CYBER CASTRUM LLP, Hyderabad | March 2024 - August 2024</p>
                <ul className="space-y-4 text-gray-700">
                  <li>• Configuring Proxy Chains: Setting up and managing proxy chains to route internet traffic through multiple proxy servers for anonymity and security.</li>
                  <li>• Network Security Analysis: Testing the effectiveness of proxy chains in preventing tracking and bypassing firewalls or geographic restrictions.</li>
                  <li>• Troubleshooting and Optimization: Identifying and resolving issues in proxy chain setups to ensure smooth and secure data flow.</li>
                </ul>
              </div>

              {/* Frontend Development Internship */}
              <div className="bg-white/80 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Frontend web development intern</h3>
                <p className="text-xl text-gray-600 mb-6">CYBER CASTRUM LLP, Hyderabad | August 2024 - January 2025</p>
                <ul className="space-y-4 text-gray-700">
                  <li>• Craft Engaging UIs: develop dynamic and responsive user interfaces using react.js, Tailwind CSS, and javascript ensuring a seamless and visually appealing experience for users.</li>
                  <li>• Component Reusability: Build modular and reusable components, streamlining development while improving maintainability and scalability of web apps.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section min-h-screen flex items-center justify-center bg-[#f8c7c7]/50 backdrop-blur">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projectsData.map((project) => (
                <div key={project.id} className="perspective-1000">
                  <motion.div
                    className="relative w-full h-[350px] cursor-pointer"
                    onClick={() => toggleCard(project.id)}
                    animate={flippedCards[project.id] ? 'back' : 'front'}
                    variants={cardVariants}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front of card */}
                    <motion.div
                      className="absolute w-full h-full bg-white/90 rounded-xl p-6 flex flex-col justify-between shadow-lg"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 my-4">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="text-blue-600"
                        >
                          <Zap className="w-8 h-8" />
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Back of card */}
                    <motion.div
                      className="absolute w-full h-full bg-blue-600 rounded-xl p-6 flex flex-col items-center justify-center text-white"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <Trophy className="w-12 h-12 mb-4" />
                      <p className="text-center mb-6 text-lg">{project.story}</p>
                      <div className="bg-blue-700 px-4 py-2 rounded-full">
                        <span className="font-semibold">{project.achievement}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="section min-h-screen flex items-center justify-center bg-[#f8c7c7]/50 backdrop-blur">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Certifications</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Python Programming Essentials",
                  "AI For Everyone",
                  "Data Analysis & Visualization With Python",
                  "React Fundamentals",
                  "React Basics",
                  "React Advanced",
                  "Power BI",
                  "Advanced AI tools",
                  "Basic Cyber Security"
                ].map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <p className="text-lg text-gray-800">
                      <span className="text-blue-600">{index % 2 === 0 ? "2023-04" : "2025-01"}</span> | {cert}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </div>
      
      {/* Add ChatBox component */}
      <ChatBox />
    </div>
  );
}

export default App;