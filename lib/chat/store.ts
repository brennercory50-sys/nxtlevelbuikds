import { Conversation } from './types';

const store = new Map<string, Conversation>();
const TTL = 24 * 60 * 60 * 1000;

if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    store.forEach((convo, id) => {
      if (now - convo.updatedAt > TTL) store.delete(id);
    });
  }, 60_000);
}

export function getConversation(id: string): Conversation | undefined {
  return store.get(id);
}

export function createConversation(id: string, utm?: Record<string, string>): Conversation {
  const convo: Conversation = {
    id,
    messages: [],
    utm,
    status: 'active',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  store.set(id, convo);
  return convo;
}

export function updateConversation(id: string, updates: Partial<Conversation>): Conversation {
  const existing = store.get(id);
  if (!existing) throw new Error(`Conversation ${id} not found`);
  const updated = { ...existing, ...updates, updatedAt: Date.now() };
  store.set(id, updated);
  return updated;
}
