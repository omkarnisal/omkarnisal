import React from 'react';

interface TimelineItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  technologies: string[];
  learnings: string[];
}

const items: TimelineItem[] = [
  {
    id: 'spaco',
    role: 'Embedded Systems Engineer',
    organization: 'Spaco Technologies',
    period: '2026 - Present',
    description: 'Developing low-power embedded software, firmware drivers, and physical hardware telemetry nodes.',
    technologies: ['STM32', 'ESP32', 'FreeRTOS', 'Embedded C/C++', 'UART/SPI/I2C/CAN'],
    learnings: ['Low-latency RTOS schedules', 'Registers and DMA buffer configurations', 'Sensor field integration']
  },
  {
    id: 'tcs',
    role: 'Assistant System Engineer',
    organization: 'Tata Consultancy Services',
    period: '2025 - 2026',
    description: 'Worked on edge AI-based analytics systems, handling data streams from multiple local sensor and device inputs, preprocessing data locally before syncing with cloud services.',
    technologies: ['Python', 'Node.js', 'MQTT', 'REST APIs', 'Edge AI Concepts', 'Linux Systems'],
    learnings: ['Managing local edge constraints (memory/compute)', 'API latency design', 'Device-to-cloud telemetry structures']
  },
  {
    id: 'intern',
    role: 'AI and Marketing Analytics Intern',
    organization: '8 Miles Solution',
    period: '2024 - 2025',
    description: 'Analyzed lead records using Python and SQL to evaluate multi-stage conversion funnels. Applied machine learning lead scoring to optimize workflows.',
    technologies: ['Python', 'SQL', 'Scikit-learn', 'MySQL', 'Web Scraping', 'Tableau'],
    learnings: ['cohort and conversion funnel segmentation', 'ML-based lead classification models', 'Dashboard automation']
  },
  {
    id: 'research',
    role: 'Traffic Violation Detection Researcher',
    organization: 'Academic Project / Publication',
    period: '2023 - 2024',
    description: 'Developed an automatic violation tracking system leveraging YOLO object detection and OpenCV. Published experimental findings.',
    technologies: ['Python', 'YOLO (Ultralytics)', 'OpenCV', 'Image/Video Processing'],
    learnings: ['Inference latency optimization', 'Frame vector intersections calculations', 'Peer-reviewed research publishing']
  },
  {
    id: 'btech',
    role: 'Bachelor of Technology, Electronics and Telecommunication',
    organization: 'University Studies',
    period: '2020 - 2024',
    description: 'Acquired foundational training in electronics, hardware circuits, and programming.',
    technologies: ['C', '8051/ARM Microcontrollers', 'Network Theory', 'Signal Processing'],
    learnings: ['Basic hardware circuit configurations', 'Low-level microprocessor structures']
  }
];

export default function JourneyPage() {
  return (
    <div className="space-y-8 py-4 max-w-xl">
      <section className="space-y-2">
        <h1 className="text-xl font-bold tracking-tight text-neutral-900">
          Career Timeline
        </h1>
        <p className="text-xs text-neutral-500 font-mono">
          Chronological record of academic research and corporate engineering:
        </p>
      </section>

      <hr />

      <section className="space-y-8 font-mono text-xs">
        {items.map((item) => (
          <div key={item.id} className="space-y-2">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline border-b border-neutral-100 pb-1">
              <span className="font-bold text-neutral-800">{item.role}</span>
              <span className="text-neutral-400 shrink-0">{item.period}</span>
            </div>
            
            <div className="text-neutral-500">
              <span className="font-semibold text-neutral-600">{item.organization}</span>
            </div>

            <p className="text-neutral-700 font-sans text-sm leading-relaxed pt-1">
              {item.description}
            </p>

            <div className="space-y-1.5 pt-2">
              <div>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">STACK:</span>
                <span className="text-neutral-600 block">{item.technologies.join(' // ')}</span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">LEARNINGS:</span>
                <ul className="list-disc pl-4 text-neutral-600 font-sans text-xs space-y-0.5">
                  {item.learnings.map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
