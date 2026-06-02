import React from 'react';

export default function ContactPage() {
  const contactLinks = [
    {
      name: 'Email',
      value: 'omkarnisal23@gmail.com',
      href: 'mailto:omkarnisal23@gmail.com',
    },
    {
      name: 'GitHub',
      value: 'github.com/omkar-nisal',
      href: 'https://github.com',
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/omkar-nisal',
      href: 'https://linkedin.com',
    },
    {
      name: 'Twitter/X',
      value: 'x.com/omkar_nisal',
      href: 'https://x.com',
    },
    {
      name: 'Instagram',
      value: 'instagram.com/omkar_nisal',
      href: 'https://instagram.com',
    },
  ];

  return (
    <div className="space-y-8 py-4 max-w-xl">
      <section className="space-y-2">
        <h1 className="text-xl font-bold tracking-tight text-neutral-900">
          Contact & Network
        </h1>
        <p className="text-xs text-neutral-500 font-mono">
          For project collaboration, hardware testing, or analytics consulting:
        </p>
      </section>

      <hr />

      <section className="space-y-4 font-mono text-xs text-neutral-800">
        {contactLinks.map((link) => (
          <div key={link.name} className="flex flex-col md:flex-row md:items-baseline md:justify-between border-b border-neutral-100 pb-2">
            <span className="font-bold text-neutral-500">{link.name}</span>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="underline text-neutral-800 hover:text-neutral-500 font-semibold"
            >
              {link.value}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
