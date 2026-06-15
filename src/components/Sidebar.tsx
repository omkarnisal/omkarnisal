'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  Home,
  Milestone,
  Cpu,
  FolderCode,
  FileSearch,
  FlaskConical,
  BarChart3,
  PenTool,
  Heart,
  Mail,
  Menu,
  X,
  Binary
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/journey', label: 'Journey', icon: Milestone },
  { href: '/engineering', label: 'Engineering', icon: Cpu },
  { href: '/projects', label: 'Projects', icon: FolderCode },
  { href: '/research', label: 'Research', icon: FileSearch },
  { href: '/lab', label: 'Personal Lab', icon: FlaskConical },
  { href: '/football', label: 'Football Analytics', icon: BarChart3 },
  { href: '/writing', label: 'Writing', icon: PenTool },
  { href: '/creative', label: 'Creative Corner', icon: Heart },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Top Header */}
      <header className="md:hidden sticky top-0 z-50 flex items-center justify-between p-4 glass-panel border-b">
        <Link href="/" className="flex items-center gap-2 font-mono font-bold tracking-tight">
          <Binary className="h-5 w-5 text-accent" />
          <span>omkar.nisal</span>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg border border-[var(--card-border)] hover:bg-[var(--card-border)] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Desktop Sidebar (visible on md and up) */}
      <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 border-r border-[var(--card-border)] bg-[var(--card-bg)] p-6 justify-between shrink-0">
        <div className="flex flex-col gap-8">
          <Link href="/" className="flex items-center gap-3 font-mono font-bold tracking-tight text-lg pl-2">
            <Binary className="h-6 w-6 text-accent" />
            <span>omkar.nisal</span>
          </Link>

          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-accent/10 text-accent border border-accent/25'
                      : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-transparent'
                  }`}
                >
                  <Icon className={`h-4.5 w-4.5 ${isActive ? 'text-accent' : 'opacity-80'}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center justify-between border-t border-[var(--card-border)] pt-4 mt-4">
          <div className="text-xs text-neutral-400 dark:text-neutral-500">
            © {new Date().getFullYear()} Omkar Nisal
          </div>
          <ThemeToggle />
        </div>
      </aside>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div
            className="absolute top-16 right-0 left-0 bg-[var(--background)] border-b border-[var(--card-border)] p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? 'bg-accent/10 text-accent border border-accent/20'
                        : 'text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
