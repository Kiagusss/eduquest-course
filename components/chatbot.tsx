'use client';

import { useState, useRef, useEffect, FormEvent, useCallback } from 'react';
import { sendMessageToGemini, getAvailableModels, convertMessagesToHistory } from '@/lib/gemini';
import { Message, GeminiModel, ChatConfig } from '@/types/chat';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState<boolean>(false); 
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: 'Halo! Saya asisten virtual. Ada yang bisa saya bantu?',
      role: 'assistant',
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedModel, setSelectedModel] = useState<GeminiModel>('gemini-2.0-flash-lite');
  const [showModelSelector, setShowModelSelector] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Config
  const chatConfig: ChatConfig = {
    model: selectedModel,
    maxHistoryLength: 10,
  };

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (error) {
      setError(null);
    }
  }, [inputMessage]);

  const formatTime = useCallback((date: Date): string => {
    return date.toLocaleTimeString('id-ID', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }, []);

  const handleSendMessage = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      content: inputMessage.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setError(null);

    try {
      const conversationMessages = messages
        .filter(msg => msg.id !== 1)
        .concat(userMessage)
        .slice(-chatConfig.maxHistoryLength * 2);

      const history = convertMessagesToHistory(conversationMessages);
      
      const response = await sendMessageToGemini(inputMessage, history, selectedModel);
      
      const assistantMessage: Message = {
        id: Date.now() + 1,
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      
      const errorMessage = error instanceof Error ? error.message : 'Terjadi kesalahan yang tidak diketahui';
      setError(errorMessage);
      
      const errorResponse: Message = {
        id: Date.now() + 1,
        content: 'Maaf, terjadi kesalahan. Silakan coba lagi dalam beberapa saat.',
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = (): void => {
    setMessages([
      {
        id: 1,
        content: 'Halo! Saya asisten virtual. Ada yang bisa saya bantu?',
        role: 'assistant',
        timestamp: new Date(),
      }
    ]);
    setError(null);
  };

  const exportConversation = (): void => {
    const conversation = messages.map(msg => 
      `${formatTime(msg.timestamp)} - ${msg.role === 'user' ? 'Anda' : 'Asisten'}: ${msg.content}`
    ).join('\n');
    
    const blob = new Blob([conversation], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-export-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const availableModels = getAvailableModels();

  const getModelDisplayName = (model: GeminiModel): string => {
    const modelNames: Record<GeminiModel, string> = {
      'gemini-2.0-flash-lite': 'Gemini 2.0 Flash Lite',
      'gemini-2.0-flash': 'Gemini 2.0 Flash',
      'gemini-2.5-flash-lite': 'Gemini 2.5 Flash Lite',
      'gemini-2.5-flash': 'Gemini 2.5 Flash',
      'gemini-2.5-pro': 'Gemini 2.5 Pro'
    };
    return modelNames[model];
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k' && isOpen) {
        e.preventDefault();
        const input = document.querySelector('input[type="text"]') as HTMLInputElement;
        input?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 animate-float"
          aria-label="Open chat"
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
            />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="animate-slide-in-from-bottom">
          <div className="bg-card text-card-foreground rounded-2xl shadow-2xl w-96 h-[600px] flex flex-col border border-border">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4 rounded-t-2xl">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Customer Support</h3>
                    <p className="text-primary-foreground/80 text-sm flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                      Online
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={exportConversation}
                    className="text-primary-foreground hover:text-primary-foreground/80 transition-colors p-1"
                    aria-label="Export chat"
                    title="Export chat"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                  </button>
                  <button
                    onClick={clearChat}
                    className="text-primary-foreground hover:text-primary-foreground/80 transition-colors p-1"
                    aria-label="Clear chat"
                    title="Clear chat"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                    aria-label="Close chat"
                  >
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Model Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowModelSelector(!showModelSelector)}
                  className="w-full bg-primary/20 hover:bg-primary/30 text-primary-foreground text-xs py-2 px-3 rounded-lg flex items-center justify-between transition-all duration-200 backdrop-blur-sm"
                >
                  <span className="font-medium">{getModelDisplayName(selectedModel)}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${showModelSelector ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </button>
                
                {showModelSelector && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-card text-card-foreground border border-border rounded-lg shadow-xl z-20 animate-fade-in">
                    {availableModels.map((model) => (
                      <button
                        key={model}
                        onClick={() => {
                          setSelectedModel(model as GeminiModel);
                          setShowModelSelector(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-150 border-b border-border last:border-b-0 ${
                          selectedModel === model 
                            ? 'bg-accent text-accent-foreground font-medium' 
                            : ''
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{getModelDisplayName(model as GeminiModel)}</span>
                          {selectedModel === model && (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Error Display */}
            {error && (
              <div className="bg-destructive/10 border-l-4 border-destructive text-destructive-foreground p-3 mx-4 mt-4 rounded animate-slide-in-from-left">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm">{error}</p>
                </div>
              </div>
            )}

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background to-muted chat-scrollbar">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02] ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-br-none shadow-lg'
                        : 'bg-card text-card-foreground rounded-bl-none border border-border shadow-md'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                    <p className={`text-xs mt-2 flex items-center ${
                      message.role === 'user' ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}>
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-card text-card-foreground rounded-2xl rounded-bl-none p-4 border border-border shadow-md">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">{getModelDisplayName(selectedModel)}</span>
                        <span className="text-muted-foreground/70 ml-1">• Mengetik...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form 
              onSubmit={handleSendMessage} 
              className="p-4 border-t border-border bg-card rounded-b-2xl"
            >
              <div className="flex space-x-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                      setInputMessage(e.target.value)
                    }
                    placeholder="Ketik pesan Anda... (Ctrl+K untuk focus)"
                    className="w-full bg-input text-foreground border border-border rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-sm transition-all duration-200 placeholder:text-muted-foreground"
                    disabled={isLoading}
                  />
                  {inputMessage.length > 0 && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <span className={`text-xs ${
                        inputMessage.length > 500 ? 'text-destructive' : 'text-muted-foreground'
                      }`}>
                        {inputMessage.length}/1000
                      </span>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
                  aria-label="Send message"
                >
                  {isLoading ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  ) : (
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                      />
                    </svg>
                  )}
                </button>
              </div>
              
              {/* Quick Tips */}
              <div className="mt-3 text-xs text-muted-foreground text-center">
                <span>AI mungkin membuat kesalahan. Periksa informasi penting.</span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}