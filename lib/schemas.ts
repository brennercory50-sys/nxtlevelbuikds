import { z } from 'zod';

const urlOrEmpty = z.string().max(1000).optional().default('').refine((v) => {
  if (!v) return true;
  try {
    new URL(v);
    return true;
  } catch {
    return false;
  }
}, 'Must be a valid URL');

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(200),
  email: z.string().email('Invalid email address').max(200),
  phone: z.string().max(30).optional().default(''),
  service: z.string().max(100).optional().default(''),
  budget: z.string().max(50).optional().default(''),
  timeline: z.string().max(50).optional().default(''),
  message: z.string().min(1, 'Message is required').max(5000),
});

export const leadSchema = z.object({
  name: z.string().min(1, 'Name is required').max(200),
  email: z.string().email('Invalid email address').max(200),
  phone: z.string().max(30).optional().default(''),
  website: urlOrEmpty,
  businessName: z.string().max(200).optional().default(''),
  city: z.string().max(100).optional().default(''),
  type: z.enum(['website-audit', 'seo-audit']),
});

export const chatMessageSchema = z.object({
  conversationId: z.string().max(100).optional(),
  message: z.string().min(1, 'Message is required').max(2000),
  utm: z.record(z.string(), z.string()).optional(),
});

export const chatLeadSchema = z.object({
  conversationId: z.string().min(1, 'Conversation ID is required').max(100),
  lead: z.object({
    name: z.string().min(1, 'Name is required').max(200),
    company: z.string().max(200).optional().default(''),
    email: z.string().email('Invalid email address').max(200),
    phone: z.string().min(1, 'Phone is required').max(30),
    website: urlOrEmpty,
    budget: z.number().min(0).max(1000000),
    businessType: z.string().min(1, 'Business type is required').max(100),
  }),
});
