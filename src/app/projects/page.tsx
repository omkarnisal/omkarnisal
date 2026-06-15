import React from 'react';

interface Project {
  title: string;
  category: 'Research' | 'Professional' | 'Personal';
  overview: string;
  technologies: string[];
  learnings: string[];
  status: 'Planning' | 'Building' | 'Testing' | 'Completed';
  github?: string;
  telemetryRef: string;
}

const projects: Project[] = [
  {
    title: 'Automatic Traffic Violation Detection System',
    category: 'Research',
    overview: 'Real-time vehicle detection and tracking using Ultralytics YOLO models. Implemented custom OpenCV pipelines for lane breaches and signal violations, optimizing local inference latency.',
    technologies: ['Python', 'YOLO (Ultralytics)', 'OpenCV', 'Image & Video Processing'],
    learnings: ['Engineered frame-level bounding check math', 'Optimized multi-threaded frame queue ingestion', 'Secured peer-reviewed research publication'],
    status: 'Completed',
    github: 'https://github.com',
    telemetryRef: 'CV_VIOLATION_DETECTOR_X1'
  },
  {
    title: 'Edge AI Data Stream Preprocessor',
    category: 'Professional',
    overview: 'Developed local telemetry capture pipelines for continuous industrial sensors at TCS. Implemented low-footprint data preprocessing and feature extraction algorithms prior to cloud syncing.',
    technologies: ['Python', 'Node.js', 'REST APIs', 'MQTT', 'Linux Systems'],
    learnings: ['Designed local error-buffering when offline', 'Maximized message throughput of resource-constrained hardware', 'Standardized backend schema integration'],
    status: 'Completed',
    telemetryRef: 'TCS_EDGE_INGEST_P3'
  },
  {
    title: 'B2B Lead Score Predictor & Funnel Analyzer',
    category: 'Professional',
    overview: 'Built analytics tools during internship at 8 Miles Solution to filter, enrich, and segment lead datasets up to 50k+ records. Implemented multi-stage classification scoring.',
    technologies: ['Python', 'SQL', 'Scikit-learn', 'MySQL', 'Web Scraping', 'Tableau'],
    learnings: ['Engineered conversion features from incomplete scraping logs', 'Improved sales follow-up efficiency by ~20-30%', 'Created robust reporting dashboards'],
    status: 'Completed',
    telemetryRef: 'EMS_LEAD_CLASSIFIER_V2'
  },
  {
    title: 'ESP32 Real-Time Sensor Telemetry Node',
    category: 'Personal',
    overview: 'Developing a low-energy sensor node using FreeRTOS on the ESP32. Utilizes custom sleep configurations to gather and transmit environment metrics over MQTT.',
    technologies: ['ESP32', 'FreeRTOS', 'Embedded C', 'MQTT', 'I2C/SPI Sensor Drivers'],
    learnings: ['Configured low-power sleep schedules to extend life cycles', 'Tested connection buffering for weak WiFi fields', 'Programmed hardware interrupts'],
    status: 'Building',
    github: 'https://github.com',
    telemetryRef: 'LAB_ESP32_TELEMETRY'
  },
  {
    title: 'STM32 Hardware Bus Controller',
    category: 'Personal',
    overview: 'Creating driver modules for SPI, I2C, and CAN networks on STM32 microcontrollers. Focuses on low-latency interrupt handlers and bare-metal registers control.',
    technologies: ['STM32 (Cortex-M4)', 'Embedded C', 'Keil uVision', 'CAN / SPI / I2C Bus'],
    learnings: ['Debugged bus clock timing offsets', 'Programmed DMA transfers to free CPU load', 'Built direct hardware register map APIs'],
    status: 'Testing',
    github: 'https://github.com',
    telemetryRef: 'LAB_STM32_CONTROLLER'
  },
  {
    title: 'Football Finance Data Engine & Predictor',
    category: 'Personal',
    overview: 'Designing an analytics pipeline parsing club performance logs alongside financial telemetry. Includes predicting league placement using ML models.',
    technologies: ['Python', 'Pandas', 'Plotly', 'ML Classification', 'Web Scraping'],
    learnings: ['Gathering disparate financial datasets from web endpoints', 'Correlating performance statistics with wage spending metrics', 'Interactive dashboard layouts'],
    status: 'Planning',
    github: 'https://github.com',
    telemetryRef: 'FOOTBALL_FINANCE_M1'
  }
];

export default function ProjectsPage() {
  const categories: Project['category'][] = ['Research', 'Professional', 'Personal'];

  return (
    <div className="space-y-8 py-4 max-w-xl">
      <section className="space-y-2">
        <h1 className="text-xl font-bold tracking-tight text-neutral-900">
          Projects Directory
        </h1>
        <p className="text-xs text-neutral-500 font-mono">
          Index of corporate edge deployments, research models, and bare-metal controllers:
        </p>
      </section>

      {categories.map((cat) => {
        const catProjects = projects.filter((p) => p.category === cat);
        return (
          <div key={cat} className="space-y-6">
            <hr />
            <h2 className="text-sm font-bold font-mono text-neutral-900 uppercase tracking-wider">
              ## {cat} Projects
            </h2>

            <div className="space-y-6 font-mono text-xs">
              {catProjects.map((project) => (
                <div key={project.title} className="space-y-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline border-b border-neutral-100 pb-1">
                    <span className="font-bold text-neutral-800">{project.title}</span>
                    <span className="text-neutral-400 font-normal shrink-0">[{project.status}]</span>
                  </div>

                  <div className="text-[10px] text-neutral-400 uppercase tracking-widest">
                    REF: {project.telemetryRef}
                  </div>

                  <p className="text-neutral-700 font-sans text-sm leading-relaxed pt-1">
                    {project.overview}
                  </p>

                  <div className="pt-2 space-y-1">
                    <div>
                      <span className="text-[10px] text-neutral-400 uppercase block">STACK:</span>
                      <span className="text-neutral-600 block">{project.technologies.join(' // ')}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-400 uppercase block">KEY CHALLENGES:</span>
                      <ul className="list-disc pl-4 text-neutral-600 font-sans text-xs space-y-0.5 pt-0.5">
                        {project.learnings.map((l, i) => (
                          <li key={i}>{l}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {project.github && (
                    <div className="pt-2">
                      <a href={project.github} className="underline text-neutral-800 hover:text-neutral-500" target="_blank" rel="noreferrer">
                        [view_on_github]
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
