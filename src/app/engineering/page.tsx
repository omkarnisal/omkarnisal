import React from 'react';

interface Domain {
  title: string;
  subTitle: string;
  description: string;
  topics: string[];
}

const domains: Domain[] = [
  {
    title: 'Embedded Systems',
    subTitle: 'Hardware & Bare-Metal Layer',
    description: 'Developing real-time firmware, managing energy limits, and designing bus communication layers.',
    topics: [
      'STM32 Firmware',
      'ESP32 Node Systems',
      'Embedded C/C++',
      'Sensors & Actuators Integration',
      'Real-time Systems (RTOS)',
      'UART / SPI / I2C / CAN Protocols',
    ]
  },
  {
    title: 'Industrial Automation',
    subTitle: 'Factory Floor & Industry 4.0',
    description: 'Connecting manufacturing systems with modern analytics and streaming networks.',
    topics: [
      'PLC System Integration',
      'Industry 4.0 Architectures',
      'Industrial Networks & Protocols',
      'Data Acquisition Systems (DAQ)',
    ]
  },
  {
    title: 'Edge AI & Computer Vision',
    subTitle: 'Local Inference & Visual Streams',
    description: 'Deploying deep learning models directly on edge nodes for real-time monitoring and sorting.',
    topics: [
      'YOLO Object Detection',
      'OpenCV Framework',
      'Image & Video Processing',
      'Video Streams Analytics',
      'Inference Performance Tuning',
    ]
  },
  {
    title: 'Linux & Edge Computing',
    subTitle: 'Operating Environments & Transport',
    description: 'Configuring custom single-board computers, operating systems, and device communications.',
    topics: [
      'Raspberry Pi Nodes',
      'Embedded Linux Configurations',
      'Device Local Networking',
      'Edge Node Fleet Deployment',
    ]
  }
];

export default function EngineeringPage() {
  return (
    <div className="space-y-8 py-4 max-w-xl">
      <section className="space-y-2">
        <h1 className="text-xl font-bold tracking-tight text-neutral-900">
          Engineering Domains
        </h1>
        <p className="text-xs text-neutral-500 font-mono">
          Structured log of expertise areas and integrated systems:
        </p>
      </section>

      <hr />

      <section className="space-y-6">
        {domains.map((domain) => (
          <div key={domain.title} className="space-y-2">
            <div className="font-mono text-sm font-bold text-neutral-800">
              {domain.title} <span className="text-xs text-neutral-400 font-normal">// {domain.subTitle}</span>
            </div>
            
            <p className="text-sm text-neutral-700 leading-relaxed font-sans">
              {domain.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-neutral-500">
              {domain.topics.map((t, idx) => (
                <span key={idx}>[{t}]</span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
