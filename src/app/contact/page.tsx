import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from '@/components/SocialIcons';

export default function ContactPage() {
  const contactLinks = [
    {
      name: 'Email',
      value: 'vinusomkar@gmail.com',
      href: 'mailto:vinusomkar@gmail.com',
      icon: Mail,
    },
    {
      name: 'GitHub',
      value: 'github.com/omkarnisal',
      href: 'https://github.com/omkarnisal',
      icon: GithubIcon,
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/omkar-nisal-b37923326',
      href: 'https://www.linkedin.com/in/omkar-nisal-b37923326/',
      icon: LinkedinIcon,
    },
    {
      name: 'Twitter/X',
      value: 'x.com/gerr8rd',
      href: 'https://x.com/gerr8rd',
      icon: TwitterIcon,
    },
    {
      name: 'Instagram',
      value: 'instagram.com/omkar_nisal',
      href: 'https://instagram.com/omkar_nisal',
      icon: InstagramIcon,
    },
  ];

  return (
    <div className="space-y-8 py-4 max-w-xl">
      <section className="space-y-2">
        <h1 className="text-xl font-bold tracking-tight text-neutral-900 font-mono">
          Contact & Network
        </h1>
        <p className="text-sm text-neutral-500 font-mono">
          For project collaboration, hardware testing, or analytics consulting:
        </p>
      </section>

      <hr />

      <section className="space-y-4 font-mono text-sm text-neutral-800">
        {contactLinks.map((link) => {
          const Icon = link.icon;
          return (
            <div key={link.name} className="flex items-center justify-between border-b border-neutral-100 pb-3 last:border-0">
              <div className="flex items-center gap-2 text-neutral-500 font-bold">
                <Icon className="h-4 w-4 shrink-0 text-neutral-700" />
                <span>{link.name}</span>
              </div>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="underline text-neutral-800 hover:text-neutral-500 font-semibold text-sm"
              >
                {link.value}
              </a>
            </div>
          );
        })}
      </section>
    </div>
  );
}
