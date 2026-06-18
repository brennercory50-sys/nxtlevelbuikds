export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

export interface LeadData {
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  budget: number;
  businessType: string;
}

export interface LeadScore {
  total: number;
  budget: number;
  businessType: number;
  engagement: number;
  serviceFit: number;
  tier: 'cold' | 'warm' | 'hot';
}

export interface Conversation {
  id: string;
  messages: ChatMessage[];
  lead?: LeadData;
  score?: LeadScore;
  utm?: Record<string, string>;
  status: 'active' | 'qualified' | 'booked' | 'abandoned';
  createdAt: number;
  updatedAt: number;
}

export interface ChatResponse {
  message: ChatMessage;
  leadFormSuggested?: boolean;
  bookingSuggested?: boolean;
}

export interface KnowledgeEntry {
  id: string;
  category: string;
  triggers: string[];
  priority: number;
  response: string;
  followUp?: string;
  service?: string;
  qualifyingQuestion?: string;
}
