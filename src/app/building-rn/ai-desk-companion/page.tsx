import React from 'react';
import Link from 'next/link';

export default function AiDeskCompanionPage() {
  return (
    <div className="space-y-8 py-4 max-w-xl">
      <section className="space-y-2">
        <div className="text-xs font-mono text-neutral-400">
          <Link href="/building-rn" className="underline hover:text-neutral-900">
            ← Back to Building RN
          </Link>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-neutral-900 font-mono">
          AI Desk Companion
        </h1>
        <p className="text-sm text-neutral-500 font-mono">
          Technical specifications & edge-hybrid architecture blueprint.
        </p>
      </section>

      <hr />

      {/* Project Summary */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold font-mono text-neutral-900 uppercase tracking-wide">
          # Project Summary
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed font-sans">
          A high-performance, hybrid standalone AI desktop companion robot designed with an optimized Edge I/O distribution architecture to eliminate microcontroller memory limits.
        </p>
      </section>

      <hr />

      {/* Architecture */}
      <section className="space-y-4 font-mono text-sm text-neutral-700">
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
          # System Architecture
        </h2>
        
        <div className="space-y-3">
          <div className="border-l-2 border-neutral-200 pl-3 space-y-1">
            <span className="font-bold text-neutral-800">[The Peripheral]</span>
            <p className="font-sans text-sm text-neutral-600">
              An ESP32-S3 acts as a real-time, low-latency binary I/O mailbox, streaming raw microphone audio frames over a fast virtual USB serial bridge (2,000,000 Baud) and drawing pulsing pixel art emotes natively.
            </p>
          </div>

          <div className="border-l-2 border-neutral-200 pl-3 space-y-1">
            <span className="font-bold text-neutral-800">[The Brain]</span>
            <p className="font-sans text-sm text-neutral-600">
              An RTX 4050 6GB Laptop asynchronously processes local openWakeWord triggers, runs faster-whisper (INT8/FP16) on the GPU for sub-second Speech-to-Text, handles deep reasoning via Google AI Pro (Gemini Pro), and feeds tokens into the ElevenLabs API for fluid voice cloning.
            </p>
          </div>
        </div>
      </section>

      <hr />

      {/* Hardware Blueprint */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold font-mono text-neutral-900 uppercase tracking-wide">
          # Hardware Blueprint (30-Row Breadboard)
        </h2>
        
        <ul className="list-disc pl-5 text-sm text-neutral-700 space-y-2 font-mono">
          <li>
            <strong className="text-neutral-900">Microcontroller:</strong> ESP32-S3 Development Module
          </li>
          <li>
            <strong className="text-neutral-900">Display Module:</strong> 1.3&quot; I2C OLED Display (4-pin, 128 x 64, Blue monochrome, U8g2 graphics library)
          </li>
          <li>
            <strong className="text-neutral-900">Audio Input:</strong> INMP441 Omnidirectional I2S Digital Microphone (16kHz capture, 3.3V rail)
          </li>
          <li>
            <strong className="text-neutral-900">Audio Output:</strong> PAM8403 Analog Class-D Amplifier Module (with manual silver potentiometer volume knob, 5V rail)
          </li>
          <li>
            <strong className="text-neutral-900">Acoustic Driver:</strong> 3W 4Ω Passive Speaker (calibrated at 5.4Ω DC resistance)
          </li>
        </ul>

        <div className="pt-2">
          <span className="text-xs text-neutral-400 font-mono uppercase block mb-1">Layout Strategy:</span>
          <p className="text-sm text-neutral-700 font-sans leading-relaxed">
            &quot;Off-Board&quot; tentacle architecture utilizing Male-to-Female jumper wires to isolate high-speed audio lines from the Wi-Fi antenna and prevent wire clutter.
          </p>
        </div>
      </section>

      <hr />

      {/* Future Prospects */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold font-mono text-neutral-900 uppercase tracking-wide">
          # Future Prospects
        </h2>

        <div className="space-y-4 font-mono text-sm">
          <div className="space-y-1.5">
            <span className="font-bold text-neutral-800">1. Edge Computer Vision (&quot;See &amp; Say&quot; Agent)</span>
            <p className="font-sans text-sm text-neutral-700 leading-relaxed">
              Add an OV2640 / OV5640 camera module directly to the ESP32-S3’s parallel DVP interface. Stream JPEG frames via the serial bridge to the laptop to run highly optimized, small local Vision-Language Models (Moondream2 / LLaVA-Phi3) sharing the RTX 4050 VRAM. Enables real-time face tracking, workspace presence detection, and automated lab bench component classification (e.g., resistor color codes).
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="font-bold text-neutral-800">2. Air-Gapped Home Automation Gateway</span>
            <p className="font-sans text-sm text-neutral-700 leading-relaxed">
              Integrate low-voltage relay modules, infrared (IR) blasters, or a 433MHz RF transceiver onto spare ESP32 GPIOs. Speak directly to the companion to trigger zero-latency, offline smart home commands. Control lab gear, send IR codes to turn room AC/TV units on or off, and map physical mechanical chassis switches/rotary encoders to trigger heavy script compilations directly on your laptop.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
