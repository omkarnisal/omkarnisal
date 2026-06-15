import React from 'react';
import Link from 'next/link';

export default function PersonalBlogsPage() {
  return (
    <div className="space-y-8 py-4 max-w-xl">
      <section className="space-y-2">
        <div className="text-xs font-mono text-neutral-400">
          <Link href="/writing" className="underline hover:text-neutral-900">
            ← Back to Writing
          </Link>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-neutral-900 font-mono">
          Personal Blogs
        </h1>
        <p className="text-sm text-neutral-500 font-mono">
          Check out if you fw me as a person.
        </p>
      </section>

      <hr />

      <section className="space-y-4">
        <p className="text-sm text-neutral-500 italic font-mono">
          No entries posted yet. Check back soon.
        </p>
      </section>
    </div>
  );
}
