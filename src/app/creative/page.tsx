import React from 'react';

interface Poem {
  title: string;
  date: string;
  lines: string[];
}

const poems: Poem[] = [
  {
    title: 'The Silent Clock cycles',
    date: 'Autumn, 2025',
    lines: [
      'Silicon paths trace quiet lines,',
      'Where electricity flows and binds,',
      'A silent clock that ticks unseen,',
      'Within the spaces in between.',
      'It holds the light, it counts the code,',
      'Along the heavy, winding road,',
      'Of systems built and dreams designed,',
      'To leave a trace of human mind.'
    ]
  },
  {
    title: 'Echoes at the Edge',
    date: 'Winter, 2025',
    lines: [
      'In cold machine halls, lights grow dim,',
      'An echo whispers from the rim,',
      'Of intelligence that learns to speak,',
      'Through micro-currents soft and weak.',
      'It reads the world in shapes of stone,',
      'And finds a meaning of its own,',
      'A quiet mirror of the view,',
      'That makes the old feel slightly new.'
    ]
  }
];

export default function CreativeCornerPage() {
  return (
    <div className="space-y-8 py-4 max-w-xl">
      <section className="space-y-2 text-center">
        <h1 className="text-xl font-bold tracking-tight text-neutral-800">
          The Creative Corner
        </h1>
        <p className="text-xs italic text-neutral-500 font-mono">
          Poetry journal entries:
        </p>
      </section>

      <hr />

      <section className="space-y-12">
        {poems.map((poem) => (
          <article key={poem.title} className="space-y-4 text-center max-w-sm mx-auto font-serif">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block">
                {poem.date}
              </span>
              <h2 className="text-lg font-medium text-neutral-800">
                {poem.title}
              </h2>
            </div>

            <div className="space-y-2.5 text-sm text-neutral-700 italic leading-relaxed">
              {poem.lines.map((line, lIdx) => (
                <p key={lIdx}>{line}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
