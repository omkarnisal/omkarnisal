import React from 'react';

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  topic: string;
  content: string;
}

const articles: Article[] = [
  {
    slug: 'template-post-slug',
    title: 'Your Article Title Goes Here (Template)',
    excerpt: 'This is a brief summary or excerpt of your article to display on the archive page. Keep it informative.',
    date: 'June 03, 2026',
    readTime: '5 min read',
    topic: 'Embedded Systems',
    content: `This is the main body paragraph. You can write your post content here.
    
    Use empty line breaks to separate paragraphs.
    
    1. List Item Example
    2. Another List Item Example
    
    You can copy this block in the code editor to add new posts to the archive.`
  }
];

export default function WritingPage() {
  return (
    <div className="space-y-8 py-4 max-w-xl">
      <section className="space-y-2">
        <h1 className="text-xl font-bold tracking-tight text-neutral-900 font-mono">
          Technical Notes
        </h1>
        <p className="text-sm text-neutral-500 font-mono">
          Engineering ledger of firmware bugs, network models, and development logs:
        </p>
      </section>

      <hr />

      <section className="space-y-6">
        {articles.map((article) => (
          <details
            key={article.slug}
            className="group border border-neutral-200 rounded-lg p-4 bg-neutral-50/50 hover:bg-neutral-50 cursor-pointer block"
          >
            <summary className="font-mono text-sm text-neutral-800 list-none flex flex-col md:flex-row md:items-baseline md:justify-between select-none">
              <span className="font-bold text-sm text-neutral-900 hover:underline group-open:underline block">
                {article.title}
              </span>
              <span className="text-neutral-500 font-normal shrink-0 text-xs font-mono">
                {article.date} // {article.readTime}
              </span>
            </summary>
            
            <p className="text-xs italic text-neutral-400 mt-2 font-mono">
              Category: {article.topic}
            </p>

            <p className="text-sm text-neutral-700 mt-3 font-sans leading-relaxed border-t border-neutral-100 pt-3">
              {article.excerpt}
            </p>

            <div className="text-sm text-neutral-800 mt-4 pt-4 border-t border-dashed border-neutral-200 whitespace-pre-line leading-relaxed font-sans">
              {article.content}
            </div>
          </details>
        ))}
      </section>
    </div>
  );
}
