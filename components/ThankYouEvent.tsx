'use client';
import { useEffect } from 'react';
import { events } from '@/lib/gtag';

export default function ThankYouEvent() {
  useEffect(() => { events.lead_confirmed(); }, []);
  return null;
}
