"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslations } from 'next-intl';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

const getBotResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.match(/\b(hi|hello|hey|greetings|assalam)\b/)) {
    return "Hello! I am the JSWS Assistant. How can I help you today?";
  }
  
  if (lowerInput.match(/\b(jsws|jamila sultan welfare society|what is jsws|ngo|about)\b/)) {
    return "JSWS (Jamila Sultan Welfare Society) is a non-profit organization dedicated to providing healthcare, rehabilitation, and educational support to those in need.";
  }

  if (lowerInput.match(/\b(donate|donation|zakat|sadqah|sponsor|fund)\b/)) {
    return "You can support us through Zakat, Sadqah, or General Donations. You can also sponsor a patient, clinic, medicines, or equipment. Please visit our Donate page for more details!";
  }

  if (lowerInput.match(/\b(contact|phone|email|call|reach|number)\b/)) {
    return "You can reach us via phone at +92 307 2021882 or +92 336 3398787. You can also email us at jswswelfare@gmail.com.";
  }

  if (lowerInput.match(/\b(sarc|rehabilitation|therapy|physio)\b/)) {
    return "SARC (Sultan Ahmed Rehabilitation Centre) provides Rehabilitation and Therapy services to help patients recover and regain independence.";
  }

  if (lowerInput.match(/\b(jsmdc|medical|dental|clinic|doctor)\b/)) {
    return "JSMDC (Jamila Sultan Medical & Dental Clinic) offers quality medical and dental services to the community.";
  }

  if (lowerInput.match(/\b(services|programs|what do you do|work)\b/)) {
    return "We offer several programs including JSMDC (Medical/Dental), SARC (Rehabilitation), Educational Scholarships, and Community Health Awareness campaigns.";
  }

  if (lowerInput.match(/\b(volunteer|join|help)\b/)) {
    return "We'd love for you to join our 500+ active volunteers! Check our Volunteer page to sign up and make a difference.";
  }

  if (lowerInput.match(/\b(location|address|where)\b/)) {
    return "Our main facilities are located in Karachi, Pakistan. Please see our Contact page for exact directions.";
  }

  if (lowerInput.match(/\b(thank you|thanks)\b/)) {
    return "You're very welcome! Let me know if you need anything else.";
  }

  return "I'm sorry, I couldn't understand that. Could you please rephrase, or contact us directly at jswswelfare@gmail.com for more detailed inquiries?";
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('ChatWidget');

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;
    
    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(userMessage.content);
      const botMessage: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: response };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 500); // Random delay between 800ms and 1300ms
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white border rounded-lg shadow-xl w-80 sm:w-96 h-[500px] flex flex-col">
          <div className="flex justify-between items-center p-4 border-b bg-red-600 text-white rounded-t-lg">
            <h3 className="font-semibold">{t('title')}</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <p className="text-gray-500 text-sm text-center mt-4">
                {t('welcome_message')}
              </p>
            )}
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-3 text-sm ${m.role === 'user' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg p-3 text-sm animate-pulse">
                  {t('thinking')}
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                value={input}
                placeholder={t('input_placeholder')}
                onChange={handleInputChange}
              />
              <Button type="submit" size="icon" disabled={isTyping || !input.trim()} className="bg-red-600 hover:bg-red-700 text-white">
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}
