import Link from 'next/link';

export default function HomePage() {
  const currentFocus = [
    'STM32 Development',
    'ESP32 Development',
    'Raspberry Pi',
    'Embedded C/C++',
    'Edge AI',
    'Computer Vision',
    'Industrial Protocols',
    'Linux Systems',
  ];

  const currentInterests = [
    'Football Analytics',
    'AI Systems',
    'Embedded Products',
    'Edge Computing',
  ];

  return (
    <div className="space-y-8 py-4 max-w-xl">
      {/* Intro */}
      <section className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
          Omkar Nisal
        </h1>
        
        <div className="font-mono text-xs text-neutral-500 space-y-1">
          <p>ROLE: Embedded Systems Engineer @ Spaco Technologies</p>
          <p>LOC: Pune, India</p>
          <p>EMAIL: omkarnisal23@gmail.com</p>
        </div>

        <p className="text-sm text-neutral-700 leading-relaxed">
          I enjoy building systems where software meets the physical world—from embedded devices and industrial automation to AI-powered analytics.
        </p>

        <div className="font-mono text-xs flex gap-4 pt-2">
          <a href="#" className="underline text-neutral-800 hover:text-neutral-500">
            [download_resume.pdf]
          </a>
          <a href="https://github.com" className="underline text-neutral-800 hover:text-neutral-500" target="_blank" rel="noreferrer">
            [github]
          </a>
          <a href="https://linkedin.com" className="underline text-neutral-800 hover:text-neutral-500" target="_blank" rel="noreferrer">
            [linkedin]
          </a>
          <a href="https://x.com" className="underline text-neutral-800 hover:text-neutral-500" target="_blank" rel="noreferrer">
            [twitter_x]
          </a>
          <a href="https://instagram.com" className="underline text-neutral-800 hover:text-neutral-500" target="_blank" rel="noreferrer">
            [instagram]
          </a>
        </div>
      </section>

      <hr />

      {/* Currently Building */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold font-mono text-neutral-900 uppercase tracking-wide">
          # Currently Building
        </h2>
        <p className="text-xs text-neutral-500 leading-relaxed font-mono">
          Active tools and hardware focus logs at Spaco Technologies:
        </p>
        <ul className="list-disc pl-5 text-sm text-neutral-700 space-y-1.5 font-mono">
          {currentFocus.map((focus) => (
            <li key={focus}>{focus}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* Current Interests */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold font-mono text-neutral-900 uppercase tracking-wide">
          # Current Interests
        </h2>
        <ul className="list-disc pl-5 text-sm text-neutral-700 space-y-1.5 font-mono">
          {currentInterests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
        <div className="pt-2 text-xs font-mono">
          <Link href="/journey" className="underline text-neutral-500 hover:text-neutral-900">
            View full education & work timeline →
          </Link>
        </div>
      </section>
    </div>
  );
}
