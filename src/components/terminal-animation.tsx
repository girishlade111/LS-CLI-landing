"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const lines = [
  { prompt: true, text: "lade init --model qwen-coder-32b --gpu a100" },
  { prompt: false, text: "Initializing Lade Stack workspace..." },
  { prompt: false, text: "Detecting GPU: NVIDIA A100 80GB x2" },
  { prompt: false, text: "Loading model: qwen-coder-32b (AWQ 4-bit)" },
  { prompt: false, text: "Tensor parallel: 2 | Memory: 72.4 / 160 GB" },
  { prompt: false, text: "" },
  { prompt: false, text: "\u2713 Model loaded              2.3s" },
  { prompt: false, text: "\u2713 Inference server ready     localhost:8080" },
  { prompt: false, text: "\u2713 Context window             128K tokens" },
  { prompt: false, text: "" },
  { prompt: true, text: 'lade run "Refactor auth middleware"' },
  { prompt: false, text: "Routing: qwen-coder-32b (task: code_generation)" },
  { prompt: false, text: "Context: 12 files | 4,291 tokens loaded" },
  { prompt: false, text: "Inference: streaming..." },
  { prompt: false, text: "\u2713 Generated 3 patches       840ms" },
  { prompt: false, text: "\u2713 Tokens: 2,847 | Cost: $0.00 (self-hosted)" },
];

function LatencyCounter() {
  const [value, setValue] = useState(12);
  const ref = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    ref.current = setInterval(() => {
      setValue(Math.floor(8 + Math.random() * 12));
    }, 2000);
    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, []);

  return (
    <span className="tabular-nums" style={{ color: "rgb(156, 163, 175)" }}>
      {value}ms
    </span>
  );
}

export function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timeout = setTimeout(
        () => setVisibleLines((v) => v + 1),
        lines[visibleLines]?.text === "" ? 250 : 100
      );
      return () => clearTimeout(timeout);
    }

    const resetTimeout = setTimeout(() => setVisibleLines(0), 5000);
    return () => clearTimeout(resetTimeout);
  }, [visibleLines]);

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-terminalBg shadow-[0_8px_32px_var(--shadow-lg)]">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ background: "#FF5F57" }} />
          <div className="h-3 w-3 rounded-full" style={{ background: "#FEBC2E" }} />
          <div className="h-3 w-3 rounded-full" style={{ background: "#28C840" }} />
        </div>
        <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          lade-cli v0.1.0
        </span>
        <div className="flex items-center gap-2 font-mono text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          p2p: <LatencyCounter />
        </div>
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-sm leading-7" data-no-transition>
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.12 }}
            className="whitespace-pre-wrap"
          >
            {line.prompt ? (
              <span>
                <span style={{ color: "#28C840" }}>$</span>{" "}
                <span style={{ color: "#E5E5E5" }}>{line.text}</span>
              </span>
            ) : line.text.startsWith("\u2713") ? (
              <span style={{ color: "#28C840" }}>{line.text}</span>
            ) : (
              <span style={{ color: "rgba(255,255,255,0.45)" }}>{line.text}</span>
            )}
            {line.text === "" && <br />}
          </motion.div>
        ))}
        {visibleLines < lines.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="inline-block h-4 w-2"
            style={{ background: "rgba(255,255,255,0.6)" }}
          />
        )}
      </div>
    </div>
  );
}
