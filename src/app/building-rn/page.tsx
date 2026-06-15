import React from 'react';
import Link from 'next/link';

export default function BuildingRnPage() {
  return (
    <div className="space-y-8 py-4 max-w-xl">
      <section className="space-y-2">
        <h1 className="text-xl font-bold tracking-tight text-neutral-900 font-mono">
          Building RN
        </h1>
        <p className="text-sm text-neutral-500 font-mono">
          A log of projects currently under active construction and prototyping:
        </p>
      </section>

      <hr />

      {/* AI Desk Companion Entry */}
      <section className="space-y-3 font-mono">
        <div className="flex justify-between items-baseline border-b border-neutral-100 pb-1">
          <h2 className="text-sm font-bold text-neutral-800">
            AI Desk Companion
          </h2>
          <span className="text-xs text-neutral-400">ACTIVE BUILD</span>
        </div>
        
        <p className="text-sm text-neutral-700 leading-relaxed font-sans">
          A high-performance, hybrid standalone AI desktop companion robot designed with an optimized Edge I/O distribution architecture to eliminate microcontroller memory limits. By splitting the real-time peripheral tasks from heavy inference processing, it achieves sub-second latency for voice communication and rich expressive feedback.
        </p>

        <div className="pt-2 text-sm font-mono">
          <Link href="/building-rn/ai-desk-companion" className="underline text-neutral-500 hover:text-neutral-900">
            [Read technical blueprint & details →]
          </Link>
        </div>
      </section>
    </div>
  );
}
