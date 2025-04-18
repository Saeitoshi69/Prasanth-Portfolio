/*
  # Create anonymous messages table

  1. New Tables
    - `anonymous_messages`
      - `id` (uuid, primary key)
      - `content` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `anonymous_messages` table
    - Add policy for anyone to insert messages
    - Add policy for authenticated users to read all messages
*/

CREATE TABLE IF NOT EXISTS anonymous_messages (
  id uuid PRIMARY KEY,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE anonymous_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert messages"
  ON anonymous_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can read messages"
  ON anonymous_messages
  FOR SELECT
  TO authenticated
  USING (true);