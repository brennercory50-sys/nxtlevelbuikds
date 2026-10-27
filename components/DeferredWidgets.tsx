'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// The chat bubble and the exit-intent popup are both non-critical: neither is
// visible at first paint, and neither can do anything until the visitor acts.
// Importing them from the root layout put ~24 KB (raw) of component code into
// the layout chunk, parsed and hydrated on every page load.
//
// They are code-split (ssr: false keeps them out of the server HTML) and mounted
// on the first real interaction. Nothing here is reachable without one: the chat
// bubble has to be tapped, and exit intent is itself a pointer event. A visitor
// who never moves, scrolls, taps or types could not have used either, so loading
// them for that visitor is pure waste. Deliberately no timer fallback — a timer
// would reintroduce the cost for exactly the sessions that never needed it.
const ChatWidget = dynamic(() => import('@/components/chat/ChatWidget'), { ssr: false });
const ExitIntentPopup = dynamic(() => import('@/components/ExitIntentPopup'), { ssr: false });

// `mouseout` is included so an exit gesture itself arms the popup; `scroll` and
// `pointermove` mean it is almost always already mounted by that point anyway.
const TRIGGERS = ['pointermove', 'pointerdown', 'keydown', 'touchstart', 'scroll', 'mouseout'] as const;

export default function DeferredWidgets() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    const go = () => {
      TRIGGERS.forEach(type => window.removeEventListener(type, go));
      setMount(true);
    };
    TRIGGERS.forEach(type => window.addEventListener(type, go, { once: true, passive: true }));
    return () => TRIGGERS.forEach(type => window.removeEventListener(type, go));
  }, []);

  if (!mount) return null;

  return (
    <>
      <ChatWidget />
      <ExitIntentPopup />
    </>
  );
}
