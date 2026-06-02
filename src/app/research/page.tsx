import React from 'react';

export default function ResearchPage() {
  const pipelineStages = [
    '01 // Inference & Vehicle Detection: Feed video streams into YOLO model to isolate bounding coordinates.',
    '02 // Tracking: Associate sequential detections using bounding box intersection distances.',
    '03 // Line Crossing Logic: Compute vector intersections against lane lines using OpenCV.',
    '04 // Telemetry Logging: Export snapshot crops and timestamped event records.'
  ];

  return (
    <div className="space-y-8 py-4 max-w-xl">
      <section className="space-y-2">
        <h1 className="text-xl font-bold tracking-tight text-neutral-900">
          Academic Research
        </h1>
        <p className="text-xs text-neutral-500 font-mono">
          Automatic Traffic Violation Detection and Categorization System:
        </p>
      </section>

      <hr />

      {/* Abstract */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold font-mono text-neutral-900 uppercase tracking-wide">
          # Abstract & Problem Context
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed font-sans">
          Traditional traffic violation logging depends heavily on manual inspection. Speed cameras are limited to velocity detection and ignore complex spatial violations like lane splitting or yellow-light breaches. 
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed font-sans">
          This system deploys a lightweight YOLO architecture directly on local edge compute nodes. It executes local video inference, associates frame bounding boxes to track vehicles over time, and computes vector boundary crosses using OpenCV.
        </p>
      </section>

      <hr />

      {/* CV Pipeline */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold font-mono text-neutral-900 uppercase tracking-wide">
          # Pipeline Stages
        </h2>
        <div className="font-mono text-xs text-neutral-700 space-y-2.5 pl-2 border-l border-neutral-200">
          {pipelineStages.map((stage, idx) => (
            <p key={idx}>{stage}</p>
          ))}
        </div>
      </section>

      <hr />

      {/* Accuracy Matrix */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold font-mono text-neutral-900 uppercase tracking-wide">
          # Experimental Metrics
        </h2>
        <pre className="text-xs text-neutral-600 font-mono bg-neutral-50 p-4 border border-neutral-200 rounded overflow-x-auto">
{`+-----------------------+--------------+-------------+------------------+
| Vehicle Class         | mAP@0.5      | Latency(ms) | Capture Success  |
+-----------------------+--------------+-------------+------------------+
| Sedans & SUVs         | 94.2%        | 35 ms       | 91.8%            |
| Two-Wheelers (Bikes)  | 89.6%        | 35 ms       | 86.2%            |
| Trucks & Buses        | 95.8%        | 42 ms       | 93.4%            |
+-----------------------+--------------+-------------+------------------+`}
        </pre>
      </section>

      <hr />

      {/* Placeholders */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold font-mono text-neutral-900 uppercase tracking-wide">
          # Document Assets & Reprints
        </h2>
        <ul className="list-disc pl-5 text-xs text-neutral-600 font-mono space-y-1.5">
          <li>[NISAL_TRAFFIC_CV_REPRINT.PDF] - Download Research Paper</li>
          <li>[SYS_BLOCK_DIAGRAM_V4.SVG] - View Architecture Schema</li>
          <li>[INFERENCE_PLAYBACK_H264.MP4] - Stream Demo Video Output</li>
        </ul>
      </section>
    </div>
  );
}
