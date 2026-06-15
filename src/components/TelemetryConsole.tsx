'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Cpu, Server, Terminal as TerminalIcon, Sparkles } from 'lucide-react';

interface LogLine {
  text: string;
  type: 'info' | 'success' | 'warn' | 'system';
  time: string;
}

export default function TelemetryConsole() {
  const [logs, setLogs] = useState<LogLine[]>([
    { text: 'SYSTEM_BOOT: STM32 core initialized on-board.', type: 'system', time: '00:01' },
    { text: 'ESP32 Wi-Fi module: connected to local AP (RSS: -62dBm)', type: 'info', time: '00:03' },
    { text: 'Sensors loaded: DHT22, MPU6050, Modbus RTU interface [QoS 1]', type: 'success', time: '00:04' },
    { text: 'Edge AI: YOLO weight maps loaded in local flash.', type: 'success', time: '00:05' },
    { text: 'Telemetry listening. Ready for query packets...', type: 'info', time: '00:06' }
  ]);
  const [isRunningInference, setIsRunningInference] = useState(false);
  const [cpuTemp, setCpuTemp] = useState(36.8);
  const [heapMemory, setHeapMemory] = useState(84.2);
  const [fps, setFps] = useState(0.0);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal logs
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // Fluctuating hardware stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuTemp((prev) => +(prev + (Math.random() - 0.5) * 0.4).toFixed(1));
      setHeapMemory((prev) => {
        const next = prev + (Math.random() - 0.5) * 0.1;
        return +(next > 85 ? 85 : next < 83 ? 83 : next).toFixed(2);
      });
      if (isRunningInference) {
        setFps((prev) => {
          const base = 28.5;
          return +(base + (Math.random() - 0.5) * 1.5).toFixed(1);
        });
      } else {
        setFps(0.0);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [isRunningInference]);

  const addLog = (text: string, type: LogLine['type'] = 'info') => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setLogs((prev) => [...prev, { text, type, time }]);
  };

  const handlePing = () => {
    addLog('Executing hardware loop-back ping...', 'system');
    setTimeout(() => {
      addLog('PING request sent to ESP32 node (192.168.1.45)...', 'info');
    }, 400);
    setTimeout(() => {
      addLog('PING reply: bytes=32 RTT=12ms TTL=64', 'success');
    }, 900);
  };

  const handleInference = () => {
    if (isRunningInference) return;
    setIsRunningInference(true);
    addLog('Initializing local camera video stream capture...', 'system');
    setTimeout(() => {
      addLog('Connecting camera source interface [OpenCV / dev/video0]...', 'info');
    }, 500);
    setTimeout(() => {
      addLog('YOLO classification pipeline engaged. Inference starts...', 'info');
    }, 1200);
    setTimeout(() => {
      addLog('Detections: [3 Vehicles], [1 Lane Crossing Breach]. Action triggered.', 'warn');
    }, 2000);
    setTimeout(() => {
      addLog('Detections: [2 Vehicles], [No Violations Detected]. Flow nominal.', 'success');
    }, 3500);
    setTimeout(() => {
      addLog('CV pipeline idle. Stream channel closed.', 'system');
      setIsRunningInference(false);
    }, 5000);
  };

  const handleRegisters = () => {
    addLog('Reading register values from core bus controllers...', 'system');
    setTimeout(() => {
      addLog('I2C Bus: 0x4B (Sensor Core) -> OK (Acknowledge)', 'success');
      addLog('SPI Bus: DR=0xAA2B, CR1=0x0340', 'info');
    }, 600);
  };

  return (
    <div className="glass-panel p-6 rounded-2xl border border-[var(--card-border)] relative overflow-hidden shadow-xl">
      {/* Background decoration: subtle grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-[var(--card-border)]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-accent/10 text-accent">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold tracking-tight text-sm text-neutral-900 dark:text-neutral-50">
                Hardware Core Telemetry Console
              </h3>
              <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block">
                MCU Model: STM32F4 + ESP32 RTOS Node
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
              TELEMETRY STATE: CONFIGURED
            </span>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 border border-[var(--card-border)] rounded-xl bg-neutral-100/30 dark:bg-neutral-950/20 space-y-1">
            <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">MCU Core Temp</span>
            <span className="text-xl font-bold tracking-tight font-mono">{cpuTemp}°C</span>
          </div>

          <div className="p-4 border border-[var(--card-border)] rounded-xl bg-neutral-100/30 dark:bg-neutral-950/20 space-y-1">
            <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">FreeRTOS Heap</span>
            <span className="text-xl font-bold tracking-tight font-mono">{heapMemory}%</span>
          </div>

          <div className="p-4 border border-[var(--card-border)] rounded-xl bg-neutral-100/30 dark:bg-neutral-950/20 space-y-1">
            <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">Inference Rate</span>
            <span className="text-xl font-bold tracking-tight font-mono text-accent">{fps} FPS</span>
          </div>

          <div className="p-4 border border-[var(--card-border)] rounded-xl bg-neutral-100/30 dark:bg-neutral-950/20 space-y-1">
            <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">Device System Bus</span>
            <span className="text-sm font-semibold tracking-tight font-mono text-neutral-700 dark:text-neutral-300 block pt-1.5">
              I2C (400kHz) / CAN
            </span>
          </div>
        </div>

        {/* Animated Oscilloscope / Sensor Telemetry Wave */}
        <div className="h-[90px] border border-[var(--card-border)] rounded-xl bg-neutral-950 p-4 relative overflow-hidden flex flex-col justify-between">
          <span className="text-[8px] font-mono text-neutral-600 uppercase tracking-widest absolute top-2 left-3 select-none">
            ANALOG_SIGNAL_LOOP (ESP32_ADC)
          </span>

          <svg className="w-full h-full absolute inset-0 text-emerald-500/80" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path
              d="M0 50 Q 25 80, 50 20 T 100 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="animate-[dash_8s_linear_infinite]"
              style={{
                strokeDasharray: '1000',
                strokeDashoffset: '1000',
                animation: 'oscillate 4s linear infinite',
              }}
            />
          </svg>

          <style jsx>{`
            @keyframes oscillate {
              0% { transform: translateX(0) scaleY(1); }
              50% { transform: translateX(-5px) scaleY(0.7); }
              100% { transform: translateX(0) scaleY(1); }
            }
          `}</style>

          <div className="absolute right-3 bottom-2 text-[9px] font-mono text-neutral-600 select-none">
            Vpp: 3.3V | Freq: 50.4Hz
          </div>
        </div>

        {/* Device Command Panel Controls */}
        <div className="space-y-2">
          <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block">
            Select Hardware Console Command
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handlePing}
              className="px-3 py-2 rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] hover:bg-[var(--card-border)] text-xs font-semibold font-mono tracking-tight transition-all duration-150 flex items-center gap-1.5"
            >
              <Server className="h-3.5 w-3.5" />
              ping_esp32_node
            </button>
            <button
              onClick={handleInference}
              disabled={isRunningInference}
              className="px-3 py-2 rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] hover:bg-[var(--card-border)] text-xs font-semibold font-mono tracking-tight transition-all duration-150 flex items-center gap-1.5 disabled:opacity-50"
            >
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              run_cv_inference
            </button>
            <button
              onClick={handleRegisters}
              className="px-3 py-2 rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] hover:bg-[var(--card-border)] text-xs font-semibold font-mono tracking-tight transition-all duration-150 flex items-center gap-1.5"
            >
              <TerminalIcon className="h-3.5 w-3.5" />
              read_mcu_registers
            </button>
          </div>
        </div>

        {/* Real-time output terminal console */}
        <div className="space-y-2">
          <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block">
            Terminal Telemetry Log Output
          </span>
          <div className="h-[140px] rounded-xl bg-neutral-950 p-4 font-mono text-[10px] overflow-y-auto space-y-1.5 border border-neutral-900 scrollbar-thin select-none">
            {logs.map((log, idx) => (
              <div key={idx} className="flex gap-2">
                <span className="text-neutral-600 shrink-0">[{log.time}]</span>
                <span
                  className={
                    log.type === 'success'
                      ? 'text-emerald-400'
                      : log.type === 'warn'
                      ? 'text-amber-400'
                      : log.type === 'system'
                      ? 'text-accent'
                      : 'text-neutral-300'
                  }
                >
                  {log.text}
                </span>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
