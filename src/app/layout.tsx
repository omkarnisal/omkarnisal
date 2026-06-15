import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Omkar Nisal | Embedded Systems Engineer',
  description: 'Project logs and technical notes by Omkar Nisal, Embedded Systems Engineer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-white text-neutral-900 antialiased min-h-full flex flex-col font-sans">
        <header className="max-w-2xl w-full mx-auto px-6 pt-12 pb-6 space-y-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-mono text-sm font-bold hover:underline">
              omkar_nisal.txt
            </Link>
            <span className="font-mono text-xs text-neutral-400">
              LOC: SPACO_TECH // ENG_LOG
            </span>
          </div>
          
          <nav className="font-mono text-xs flex flex-wrap gap-x-3 gap-y-1.5 border-b border-neutral-200 pb-4 text-neutral-500">
            <Link href="/" className="hover:text-neutral-900 hover:underline">[home]</Link>
            <Link href="/journey" className="hover:text-neutral-900 hover:underline">[journey]</Link>
            <Link href="/engineering" className="hover:text-neutral-900 hover:underline">[engineering]</Link>
            <Link href="/projects" className="hover:text-neutral-900 hover:underline">[projects]</Link>
            <Link href="/research" className="hover:text-neutral-900 hover:underline">[research]</Link>
            <Link href="/lab" className="hover:text-neutral-900 hover:underline">[lab]</Link>
            <Link href="/writing" className="hover:text-neutral-900 hover:underline">[writing]</Link>
            <Link href="/contact" className="hover:text-neutral-900 hover:underline">[contact]</Link>
          </nav>
        </header>

        <main className="flex-1 max-w-2xl w-full mx-auto px-6 pb-20">
          {children}
        </main>
      </body>
    </html>
  );
}
