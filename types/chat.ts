export interface Message {
  id: number;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatHistoryItem {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export type GeminiModel = 
  | 'gemini-2.0-flash-lite'
  | 'gemini-2.0-flash'
  | 'gemini-2.5-flash-lite'
  | 'gemini-2.5-flash'
  | 'gemini-2.5-pro';

export interface ChatConfig {
  model: GeminiModel;
  maxHistoryLength: number;
}