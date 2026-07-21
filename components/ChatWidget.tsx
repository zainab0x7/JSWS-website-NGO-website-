"use client";

import { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, sendMessage, status } = useChat();

  const isLoading = status === 'submitted' || status === 'streaming';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white border rounded-lg shadow-xl w-80 sm:w-96 h-[500px] flex flex-col">
          <div className="flex justify-between items-center p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
            <h3 className="font-semibold text-white">JSWS Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <p className="text-gray-500 text-sm text-center mt-4">
                Hi! Ask me anything about JSWS services.
              </p>
            )}
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-3 text-sm ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  {m.text || m.parts?.find(p => p.type === 'text')?.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg p-3 text-sm animate-pulse">
                  Thinking...
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={input}
                placeholder="Type your message..."
                onChange={handleInputChange}
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center bg-red-600 text-white"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}
