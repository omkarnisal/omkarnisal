import React from 'react';
import Link from 'next/link';

export default function WritingHubPage() {
  return (
    <div className="space-y-8 py-4 max-w-xl">
      <section className="space-y-2">
        <h1 className="text-xl font-bold tracking-tight text-neutral-900 font-mono">
          Writing
        </h1>
        <p className="text-sm text-neutral-500 font-mono">
          Essays, engineering guides, and thoughts divided by focus:
        </p>
      </section>

      <hr />

      <section className="space-y-6">
        {/* Technology Blogs Link Card */}
        <div className="space-y-2 font-mono">
          <div className="flex justify-between items-baseline border-b border-neutral-100 pb-1">
            <h2 className="text-sm font-bold text-neutral-800">
              Technology Blogs
            </h2>
          </div>
          <p className="text-sm text-neutral-700 leading-relaxed font-sans">
            I write what I have studied about sometimes.
          </p>
          <div className="pt-1 text-sm">
            <Link href="/writing/technology-blogs" className="underline text-neutral-500 hover:text-neutral-900">
              [Browse tech logs →]
            </Link>
          </div>
        </div>

        {/* Personal Blogs Link Card */}
        <div className="space-y-2 font-mono">
          <div className="flex justify-between items-baseline border-b border-neutral-100 pb-1">
            <h2 className="text-sm font-bold text-neutral-800">
              Personal Blogs
            </h2>
          </div>
          <p className="text-sm text-neutral-700 leading-relaxed font-sans">
            Check out if you fw me as a person.
          </p>
          <div className="pt-1 text-sm">
            <Link href="/writing/personal-blogs" className="underline text-neutral-500 hover:text-neutral-900">
              [Browse personal essays →]
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
