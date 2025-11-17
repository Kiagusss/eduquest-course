import { GoogleGenerativeAI } from '@google/generative-ai';
import { ChatHistoryItem, GeminiModel } from '../types/chat';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

const AVAILABLE_MODELS = {
  'gemini-2.0-flash-lite': 'gemini-2.0-flash-lite',
  'gemini-2.0-flash': 'gemini-2.0-flash', 
  'gemini-2.5-flash-lite': 'gemini-2.5-flash-lite',
  'gemini-2.5-flash': 'gemini-2.5-flash',
  'gemini-2.5-pro': 'gemini-2.5-pro'
} as const;

export async function sendMessageToGemini(
  message: string, 
  history: ChatHistoryItem[] = [],
  modelName: GeminiModel = 'gemini-2.0-flash-lite'
): Promise<string> {
  try {
    console.log(`Using model: ${modelName} with ${history.length} history items`);
    
    const model = genAI.getGenerativeModel({ 
      model: modelName,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    // Validasi dan format history dengan benar
    const validatedHistory = validateAndFormatHistory(history);
    
    const chat = model.startChat({
      history: validatedHistory,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error calling Gemini API with history:', error);
    
    // Fallback: coba tanpa history
    try {
      console.log('Trying without history...');
      return await sendSimpleMessage(message, modelName);
    } catch (fallbackError) {
      console.error('Fallback also failed:', fallbackError);
      
      // Fallback ke model lain
      if (modelName !== 'gemini-2.0-flash-lite') {
        console.log('Trying fallback model: gemini-2.0-flash-lite');
        return sendSimpleMessage(message, 'gemini-2.0-flash-lite');
      }
      
      throw new Error('Failed to get response from AI');
    }
  }
}

// Function untuk message sederhana tanpa history
async function sendSimpleMessage(message: string, modelName: GeminiModel): Promise<string> {
  const model = genAI.getGenerativeModel({ 
    model: modelName,
    generationConfig: {
      maxOutputTokens: 1000,
      temperature: 0.7,
    },
  });

  const result = await model.generateContent(message);
  const response = await result.response;
  return response.text();
}

// Validasi dan format history agar sesuai dengan requirements Gemini
function validateAndFormatHistory(history: ChatHistoryItem[]): ChatHistoryItem[] {
  if (history.length === 0) return [];

  const formattedHistory: ChatHistoryItem[] = [];
  let lastRole: 'user' | 'model' | null = null;

  for (const item of history) {
    // Skip jika role sama dengan sebelumnya (tidak boleh consecutive same role)
    if (item.role !== lastRole) {
      formattedHistory.push({
        role: item.role,
        parts: [{ text: item.parts[0]?.text || '' }]
      });
      lastRole = item.role;
    }
  }

  // Pastikan history dimulai dengan user message
  if (formattedHistory.length > 0 && formattedHistory[0].role !== 'user') {
    formattedHistory.shift();
  }

  // Batasi panjang history untuk menghindari token limit
  const MAX_HISTORY_LENGTH = 20;
  if (formattedHistory.length > MAX_HISTORY_LENGTH) {
    return formattedHistory.slice(-MAX_HISTORY_LENGTH);
  }

  return formattedHistory;
}

// Function untuk convert messages ke format history Gemini
export function convertMessagesToHistory(messages: Array<{ role: 'user' | 'assistant'; content: string }>): ChatHistoryItem[] {
  return messages
    .filter(msg => msg.role === 'user' || msg.role === 'assistant')
    .map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));
}

export function getAvailableModels(): string[] {
  return Object.keys(AVAILABLE_MODELS);
}