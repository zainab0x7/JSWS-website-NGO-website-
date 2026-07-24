"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, User, Bot, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from '@ai-sdk/react';
import { cn } from '@/lib/utils';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('ChatWidget');

  const { messages, input, handleInputChange, handleSubmit, isLoading, setInput, append } = useChat({
    api: '/api/chat',
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const quickReplies = [
    "How can I donate?",
    "Where are you located?",
    "What is SARC?",
    "Contact information"
  ];

  const handleQuickReply = (text: string) => {
    if (typeof append === 'function') {
      append({
        role: 'user',
        content: text,
      });
    } else if (typeof setInput === 'function') {
      setInput(text);
    } else {
      handleInputChange({
        target: { value: text }
      } as any);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl shadow-2xl w-[350px] sm:w-[400px] h-[550px] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[var(--color-primary)] to-red-500 text-white shadow-md">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-2 rounded-full">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t('title')}</h3>
                  <p className="text-xs text-red-100 opacity-90">Always here to help you</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white/80 hover:text-white bg-black/10 hover:bg-black/20 p-2 rounded-full transition-colors"
                aria-label="Close Chat"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full space-y-6 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center">
                    <img src="/jsws-logo.png" alt="JSWS" className="w-12 h-12 object-contain" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-gray-800">Welcome to JSWS!</h4>
                    <p className="text-sm text-gray-500 max-w-[250px] mx-auto">
                      {t('welcome_message')}
                    </p>
                  </div>
                  
                  {/* Quick Replies */}
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {quickReplies.map((reply, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs bg-white border border-red-100 hover:border-[var(--color-primary)] hover:bg-red-50 text-gray-700 hover:text-[var(--color-primary)] px-3 py-1.5 rounded-full transition-all shadow-sm flex items-center gap-1.5"
                      >
                        <HelpCircle size={12} />
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {messages.map((m) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={m.id} 
                  className={cn(
                    "flex gap-3",
                    m.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  {m.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                      <Bot size={16} className="text-[var(--color-primary)]" />
                    </div>
                  )}
                  
                  <div className={cn(
                    "max-w-[75%] rounded-2xl p-3.5 text-sm shadow-sm",
                    m.role === 'user' 
                      ? 'bg-[var(--color-primary)] text-white rounded-tr-sm' 
                      : 'bg-white border border-gray-100 text-gray-800 rounded-tl-sm'
                  )}>
                    <div className="whitespace-pre-wrap leading-relaxed">
                      {m.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                    <Bot size={16} className="text-[var(--color-primary)]" />
                  </div>
                  <div className="bg-white border border-gray-100 text-gray-800 rounded-2xl rounded-tl-sm p-4 text-sm shadow-sm flex gap-1 items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100">
              <form onSubmit={handleSubmit} className="flex gap-2 relative items-center">
                <input
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[var(--color-primary)] transition-all placeholder:text-gray-400"
                  value={input}
                  placeholder={t('input_placeholder')}
                  onChange={handleInputChange}
                />
                <Button 
                  type="submit" 
                  disabled={isLoading || !(input || '').trim()} 
                  className="absolute right-1.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-full w-9 h-9 p-0 flex items-center justify-center transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send size={16} className="ml-0.5" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white w-14 h-14 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95",
          isOpen && "rotate-90 scale-90"
        )}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
}
