import React from 'react';

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  topic: string;
  content: string;
}

const articles: Article[] = [
  {
    slug: 'low-latency-inference-edge',
    title: 'Optimizing YOLO Object Tracking for Embedded Intel Compute Nodes',
    excerpt: 'Deep-dive analysis of reducing float precision sizes and handling multi-threaded OpenCV queue schedules on small-form accelerators.',
    date: 'May 18, 2026',
    readTime: '8 min read',
    topic: 'Computer Vision',
    content: `When deploying deep learning networks at the edge, compute limitations require tight hardware-level coordination. In this post, we analyze YOLOv8 optimization benchmarks.
    
    1. Frame Buffering Constraints
    Under normal operations, feeding frames straight to the GPU or VPU creates a bottle-neck. By building a custom triple-buffered queue inside Python/C++ OpenCV threads, we isolate:
    - Frame capture
    - Tensor preprocessing
    - Model forward propagation
    
    2. Float Quantization results
    Scaling weights from FP32 parameters to INT8 representations decreases model size by nearly 74%, while maintaining over 92% of the original mean average precision (mAP) scoring. The latency decreases from 110ms down to 34ms per evaluation.
    
    3. Conclusion
    Edge analytics deployment succeeds or fails based on packet management. Pre-filtering frames during static cycles prevents CPU throttle and guarantees high reliability.`
  },
  {
    slug: 'stm32-bare-metal-clock',
    title: 'STM32 Hardware Bus Optimization: Tuning SPI & I2C Handshakes',
    excerpt: 'How to bypass standard HAL drivers to configure SPI registers manually, maximizing transfer rates for local sensor networks.',
    date: 'April 02, 2026',
    readTime: '6 min read',
    topic: 'Embedded Systems',
    content: `Most developers default to default library interfaces like STM32 HAL. However, these layers introduce unnecessary memory allocations and clock cycle wastes.
    
    Direct Register Mapping:
    By pointing pointers straight to boundary addresses (like SPI1->DR and SPI1->SR), we completely eliminate checking overhead.
    
    DMA Configurations:
    By assigning memory offsets straight to the peripheral address list via Direct Memory Access (DMA), the microcontroller shifts data blocks dynamically, freeing up main CPU clocks for critical state calculations.`
  },
  {
    slug: 'industry-4-0-mqtt-modbus',
    title: 'Translating Legacy Modbus Protocols into Lightweight JSON telemetry',
    excerpt: 'Building modular node gateways to translate factory sensor inputs into MQTT payloads for cloud monitoring dashboards.',
    date: 'March 14, 2026',
    readTime: '7 min read',
    topic: 'Industry 4.0',
    content: `Modern factory infrastructure depends on systems designed in the 1980s. Connecting these systems requires building low-latency translator nodes.
    
    1. Read Modbus Registers
    We read 16-bit register strings mapping to temperature probes or speed meters.
    
    2. Encapsulate into JSON schemas
    Convert numeric bytes into readable key-value items.
    
    3. Stream through MQTT brokers
    Deploy local QoS level-1 MQTT packets, ensuring zero message drops in noisy industrial environments.`
  },
  {
    slug: 'career-journey-reflection',
    title: 'From Telecommunication Basics to Industrial Systems Engineering',
    excerpt: 'Key lessons learned transitioning across academic research, lead generation analytics, and deploying industrial edge intelligence.',
    date: 'Jan 20, 2026',
    readTime: '5 min read',
    topic: 'Career Journey',
    content: `Reflecting on shifts between different engineering domains. Working with large-scale TCS teams taught me to build clean, standard interfaces.
    
    Key Takeaways:
    1. Domain boundaries are porous: Electronics engineering prepares you for low-level systems, while analytics helps you process high-level telemetry.
    2. Write readable code: Always plan and document APIs, schemas, and register maps before typing code.`
  }
];

export default function WritingPage() {
  return (
    <div className="space-y-8 py-4 max-w-xl">
      <section className="space-y-2">
        <h1 className="text-xl font-bold tracking-tight text-neutral-900">
          Technical Notes
        </h1>
        <p className="text-xs text-neutral-500 font-mono">
          Engineering ledger of firmware bugs, network models, and development logs:
        </p>
      </section>

      <hr />

      <section className="space-y-6">
        {articles.map((article) => (
          <details
            key={article.slug}
            className="group border border-neutral-200 rounded-lg p-4 bg-neutral-50/50 hover:bg-neutral-50 cursor-pointer block"
          >
            <summary className="font-mono text-xs text-neutral-800 list-none flex flex-col md:flex-row md:items-baseline md:justify-between select-none">
              <span className="font-bold text-sm text-neutral-900 hover:underline group-open:underline block">
                {article.title}
              </span>
              <span className="text-neutral-400 font-normal shrink-0">
                {article.date} // {article.readTime}
              </span>
            </summary>
            
            <p className="text-xs italic text-neutral-500 mt-2 font-mono">
              Category: {article.topic}
            </p>

            <p className="text-sm text-neutral-700 mt-3 font-sans leading-relaxed border-t border-neutral-100 pt-3">
              {article.excerpt}
            </p>

            <div className="text-sm text-neutral-800 mt-4 pt-4 border-t border-dashed border-neutral-200 whitespace-pre-line leading-relaxed font-sans">
              {article.content}
            </div>
          </details>
        ))}
      </section>
    </div>
  );
}
