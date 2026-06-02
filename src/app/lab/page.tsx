import React from 'react';

interface LabCard {
  title: string;
  category: string;
  desc: string;
  status: 'Planning' | 'Building' | 'Testing' | 'Completed';
  telemetryRef: string;
}

const labItems: LabCard[] = [
  {
    title: 'ESP32 Wi-Fi Telemetry Node',
    category: 'ESP32 Experiments',
    desc: 'Creating low-power deep sleep cycles that gather local temperature and humidity sensor logs, publishing to an MQTT message broker.',
    status: 'Building',
    telemetryRef: 'LAB_ESP32_WIFI_01'
  },
  {
    title: 'STM32 RTOS Task Scheduler',
    category: 'STM32 Experiments',
    desc: 'Setting up FreeRTOS schedules on a STM32 board. Measuring latency context switches and configuring SPI DMA streams.',
    status: 'Testing',
    telemetryRef: 'LAB_STM32_RTOS_02'
  },
  {
    title: 'Raspberry Pi Local Media Ingest',
    category: 'Raspberry Pi Projects',
    desc: 'Setting up a central server cluster on Pi nodes that aggregates local device metrics and pushes formatted report logs.',
    status: 'Completed',
    telemetryRef: 'LAB_RPI_CLUSTER_03'
  },
  {
    title: 'Anomalous Audio Signal Sorting',
    category: 'AI Projects',
    desc: 'Training custom micro-models to classify motor health by evaluating sound waveform anomalies at the machine level.',
    status: 'Planning',
    telemetryRef: 'LAB_AUDIO_CLASSIFY_04'
  },
  {
    title: 'Multi-Object Tracking CV Filters',
    category: 'Computer Vision Tests',
    desc: 'Writing frame-by-frame tracker components using optical flow and centroid distances to trace conveyor items.',
    status: 'Testing',
    telemetryRef: 'LAB_CV_CENTROID_05'
  },
  {
    title: 'Modbus Home Node Hub',
    category: 'Home Automation',
    desc: 'Interfacing domestic heat elements and light controllers to a localized dashboard using industrial Modbus loops.',
    status: 'Building',
    telemetryRef: 'LAB_DOMESTIC_MODBUS_06'
  },
  {
    title: 'Lightweight TensorRT Inference',
    category: 'Edge AI Experiments',
    desc: 'Quantizing convolutional networks to INT8 scales to maximize speed on resource-constrained micro-accelerators.',
    status: 'Planning',
    telemetryRef: 'LAB_TRT_QUANT_07'
  }
];

export default function LabPage() {
  return (
    <div className="space-y-8 py-4 max-w-xl">
      <section className="space-y-2">
        <h1 className="text-xl font-bold tracking-tight text-neutral-900">
          Personal Laboratory
        </h1>
        <p className="text-xs text-neutral-500 font-mono">
          Logs of active firmware experiments, hardware automation, and edge models:
        </p>
      </section>

      <hr />

      <section className="space-y-6 font-mono text-xs text-neutral-800">
        {labItems.map((item) => (
          <div key={item.title} className="space-y-1.5 border-b border-neutral-100 pb-4 last:border-0 last:pb-0">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
              <span className="font-bold text-neutral-900">{item.title}</span>
              <span className="text-neutral-400 font-normal shrink-0">[{item.status}]</span>
            </div>
            
            <div className="text-[10px] text-neutral-400 uppercase tracking-wider">
              TAGS: {item.category} // REF: {item.telemetryRef}
            </div>

            <p className="text-neutral-700 font-sans text-sm leading-relaxed pt-1">
              {item.desc}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
