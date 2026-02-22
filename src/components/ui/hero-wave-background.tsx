"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * HeroWaveBackground — Animated canvas wave that renders behind hero content.
 *
 * Renders layered sine waves with organic noise. Adapts color intensity
 * to light/dark theme. Automatically sizes to its parent container.
 *
 * Performance:
 *  - Uses offscreen downscaled canvas (SCALE factor) to reduce pixel fill
 *  - Reduces resolution further on mobile (< 768px)
 *  - Cleans up animation frame on unmount
 *  - Uses pointer-events-none so it never captures clicks
 */

interface WaveLayer {
  amplitude: number;
  frequency: number;
  speed: number;
  phase: number;
  color: [number, number, number];
  opacity: number;
}

const DARK_LAYERS: WaveLayer[] = [
  { amplitude: 80, frequency: 0.003, speed: 0.008, phase: 0, color: [132, 204, 22], opacity: 0.07 },
  { amplitude: 60, frequency: 0.005, speed: 0.012, phase: 2, color: [22, 163, 74], opacity: 0.05 },
  { amplitude: 100, frequency: 0.002, speed: 0.006, phase: 4, color: [56, 189, 248], opacity: 0.04 },
  { amplitude: 40, frequency: 0.007, speed: 0.015, phase: 1, color: [168, 85, 247], opacity: 0.03 },
];

const LIGHT_LAYERS: WaveLayer[] = [
  { amplitude: 80, frequency: 0.003, speed: 0.008, phase: 0, color: [132, 204, 22], opacity: 0.05 },
  { amplitude: 60, frequency: 0.005, speed: 0.012, phase: 2, color: [22, 163, 74], opacity: 0.035 },
  { amplitude: 100, frequency: 0.002, speed: 0.006, phase: 4, color: [56, 189, 248], opacity: 0.025 },
  { amplitude: 40, frequency: 0.007, speed: 0.015, phase: 1, color: [168, 85, 247], opacity: 0.02 },
];

export function HeroWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);
  const timeRef = useRef(0);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDark = document.documentElement.classList.contains("dark");
    const isMobile = window.innerWidth < 768;
    const SCALE = isMobile ? 3 : 2;

    // Size canvas to container
    const rect = container.getBoundingClientRect();
    const w = Math.floor(rect.width / SCALE);
    const h = Math.floor(rect.height / SCALE);

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    // Clear
    ctx.clearRect(0, 0, w, h);

    const layers = isDark ? DARK_LAYERS : LIGHT_LAYERS;
    timeRef.current += 1;
    const t = timeRef.current;

    // Draw each wave layer
    for (const layer of layers) {
      ctx.beginPath();
      ctx.moveTo(0, h);

      for (let x = 0; x <= w; x++) {
        const normalX = x * SCALE;
        const y =
          h * 0.5 +
          Math.sin(normalX * layer.frequency + t * layer.speed + layer.phase) *
            layer.amplitude / SCALE +
          Math.sin(normalX * layer.frequency * 0.5 + t * layer.speed * 0.7) *
            (layer.amplitude * 0.3) / SCALE;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      // Close the path along bottom edge
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();

      const [r, g, b] = layer.color;
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${layer.opacity})`;
      ctx.fill();
    }

    // Organic noise dots (very sparse)
    if (!isMobile) {
      const dotCount = Math.floor(w * h * 0.0002);
      for (let i = 0; i < dotCount; i++) {
        const dx = Math.random() * w;
        const dy = Math.random() * h;
        const alpha = isDark ? 0.03 : 0.015;
        ctx.fillStyle = isDark
          ? `rgba(132, 204, 22, ${alpha})`
          : `rgba(22, 163, 74, ${alpha})`;
        ctx.fillRect(dx, dy, 1, 1);
      }
    }

    animationFrameRef.current = requestAnimationFrame(render);
  }, []);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [render]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      data-no-transition
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ imageRendering: "auto" }}
      />
    </div>
  );
}
