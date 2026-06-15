import React from 'react';
import Link from 'next/link';

interface TechArticle {
  title: string;
  excerpt: string;
  link: string;
}

const techArticles: TechArticle[] = [
  {
    title: 'Fueling the Engine',
    link: 'https://medium.com/@vinusomkar/fueling-the-engine-a7427f5dd142',
    excerpt: 'Every time we twist the throttle or press the accelerator, the engine needs to know how much fuel should be delivered for the desired power output. In older vehicles, this task was handled by a carburetor. In most modern vehicles, it is managed by an Electronic Fuel Injection (EFI) system...'
  },
  {
    title: 'Electronically controlled carburetors',
    link: 'https://medium.com/@vinusomkar/electronically-controlled-carburetors-091cff0c793c',
    excerpt: 'In a world that has largely moved on to Electronic Fuel Injection (EFI), we are going to look back at the fascinating engineering attempts to bridge these two eras — specifically, how engineers use digital microcontrollers and high-speed solenoids to turn an analog mechanical computer into a smart, closed-loop system.'
  },
  {
    title: 'Contextual xG - The xG Philosophy: "What is xG?"',
    link: 'https://medium.com/@vinusomkar',
    excerpt: 'An exploration of Expected Goals (xG) in football analytics, discussing the foundations of shot metrics and how incorporating spatial and situational context improves predictive accuracy over simplified event-driven models.'
  }
];

export default function TechnologyBlogsPage() {
  return (
    <div className="space-y-8 py-4 max-w-xl">
      <section className="space-y-2">
        <div className="text-xs font-mono text-neutral-400">
          <Link href="/writing" className="underline hover:text-neutral-900">
            ← Back to Writing
          </Link>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-neutral-900 font-mono">
          Technology Blogs
        </h1>
        <p className="text-sm text-neutral-500 font-mono">
          I write what I have studied about sometimes.
        </p>
      </section>

      <hr />

      <section className="space-y-6">
        <div className="space-y-6">
          {techArticles.map((article, index) => (
            <div key={index} className="space-y-2 font-mono">
              <div className="flex justify-between items-baseline border-b border-neutral-100 pb-1">
                <h2 className="text-sm font-bold text-neutral-800">
                  {article.title}
                </h2>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed font-sans">
                {article.excerpt}
              </p>
              <div className="pt-1 text-sm">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-neutral-500 hover:text-neutral-900"
                >
                  [Read on Medium →]
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
