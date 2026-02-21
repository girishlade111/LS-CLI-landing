"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { prompt: true, text: "lade init --model qwen-coder-32b" },
  { prompt: false, text: "Initializing Lade Stack workspace..." },
  { prompt: false, text: "Model: qwen-coder-32b (4-bit quantized)" },
  { prompt: false, text: "GPU: NVIDIA A100 80GB" },
  { prompt: false, text: "Endpoint: localhost:8080" },
  { prompt: false, text: "" },
  { prompt: false, text: "✓ Model loaded in 2.3s" },
  { prompt: false, text: "✓ Inference server ready" },
  { prompt: false, text: "✓ Context window: 128K tokens" },
  { prompt: false, text: "" },
  { prompt: true, text: 'lade run "Refactor auth middleware"' },
  { prompt: false, text: "Routing to: qwen-coder-32b" },
  { prompt: false, text: "Analyzing workspace context..." },
  { prompt: false, text: "Processing 12 files..." },
  { prompt: false, text: "✓ Generated 3 file patches" },
  { prompt: false, text: "✓ Latency: 840ms | Tokens: 2,847" },
];

export function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timeout = setTimeout(
        () => setVisibleLines((v) => v + 1),
        lines[visibleLines]?.text === "" ? 200 : 120
      );
      return () => clearTimeout(timeout);
    }

    const resetTimeout = setTimeout(() => setVisibleLines(0), 4000);
    return () => clearTimeout(resetTimeout);
  }, [visibleLines]);

  return (
    <div className="overflow-hidden rounded border border-border-subtle bg-[#0a0e17] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-border-subtle px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500/60" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
        <div className="h-3 w-3 rounded-full bg-green-500/60" />
        <span className="ml-3 text-xs text-text-muted">lade-cli — terminal</span>
      </div>
      <div className="p-5 font-mono text-sm leading-6">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="whitespace-pre-wrap"
          >
            {line.prompt ? (
              <span>
                <span className="text-success">$</span>{" "}
                <span className="text-text-primary">{line.text}</span>
              </span>
            ) : line.text.startsWith("✓") ? (
              <span className="text-success">{line.text}</span>
            ) : (
              <span className="text-text-muted">{line.text}</span>
            )}
            {line.text === "" && <br />}
          </motion.div>
        ))}
        {visibleLines < lines.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="inline-block h-4 w-2 bg-accent"
          />
        )}
      </div>
    </div>
  );
}
