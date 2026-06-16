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
    'Edge Computing',
    'Embedded Electronics',
    'Yocto Project',
    'Linux',
  ];

  return (
    <div className="space-y-8 py-4 max-w-xl">
      {/* Intro */}
      <section className="space-y-4">
        <h1 className="text-xl font-bold tracking-tight text-neutral-900 font-mono">
          Omkar Nisal
        </h1>
        
        <div className="font-mono text-sm text-neutral-600 space-y-1">
          <p>ROLE: Embedded Engineer @ Spaco Technologies</p>
          <p>LOC: Pune, India</p>
          <p>EMAIL: vinusomkar@gmail.com</p>
        </div>

        <p className="text-sm text-neutral-700 leading-relaxed font-mono">
          I work as an embedded systems engineer on industrial automation, embedded systems, and connected devices while constantly tinkering with ESP32s, STM32s, Raspberry Pis, and whatever development board catches my interest next. Alongside embedded systems, I'm interested in machine learning, quantitative finance, and mathematical modeling. I enjoy exploring how data, statistics, and algorithms can be used to understand complex systems, whether that's financial markets, industrial processes, or real-world decision making.
        </p>

        <div className="font-mono text-sm flex flex-wrap gap-x-4 gap-y-1 pt-2">
          <a href="#" className="underline text-neutral-800 hover:text-neutral-500">
            [download_resume.pdf]
          </a>
          <a href="https://github.com/omkarnisal" className="underline text-neutral-800 hover:text-neutral-500" target="_blank" rel="noreferrer">
            [github]
          </a>
          <a href="https://www.linkedin.com/in/omkar-nisal-b37923326/" className="underline text-neutral-800 hover:text-neutral-500" target="_blank" rel="noreferrer">
            [linkedin]
          </a>
          <a href="https://x.com/gerr8rd" className="underline text-neutral-800 hover:text-neutral-500" target="_blank" rel="noreferrer">
            [twitter_x]
          </a>
          <a href="https://instagram.com/omkar_nisal" className="underline text-neutral-800 hover:text-neutral-500" target="_blank" rel="noreferrer">
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
        <p className="text-sm text-neutral-500 leading-relaxed font-mono">
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
        <div className="pt-2 text-sm font-mono">
          <Link href="/journey" className="underline text-neutral-500 hover:text-neutral-900">
            View full education & work timeline →
          </Link>
        </div>
      </section>
    </div>
  );
}
