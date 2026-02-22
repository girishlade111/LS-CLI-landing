"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const nodes = [
  {
    label: "Developer",
    x: 30,
    y: 50,
    width: 100,
    description: "CLI command input and workspace context",
  },
  {
    label: "CLI Parser",
    x: 185,
    y: 50,
    width: 100,
    description: "Context-aware command parsing and config loading",
  },
  {
    label: "Router",
    x: 345,
    y: 50,
    width: 100,
    description: "Intelligent model selection and cost optimization",
  },
  {
    label: "Model Pool",
    x: 510,
    y: 50,
    width: 110,
    description: "Multi-model inference with warm/cold scheduling",
  },
  {
    label: "GPU VMs",
    x: 680,
    y: 50,
    width: 100,
    description: "Hardware-accelerated compute on your infrastructure",
  },
];

const connections = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
];

export function ArchitectureDiagram() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-surfaceAlt p-6">
      <svg
        viewBox="0 0 820 100"
        className="mx-auto h-auto min-w-[700px] max-w-full"
        fill="none"
      >
        {/* Connection lines */}
        {connections.map((conn, i) => {
          const from = nodes[conn.from];
          const to = nodes[conn.to];
          const x1 = from.x + from.width + 4;
          const x2 = to.x - 4;
          const isActive =
            hoveredNode === conn.from || hoveredNode === conn.to;

          return (
            <g key={`conn-${i}`}>
              <motion.line
                x1={x1}
                y1={from.y}
                x2={x2}
                y2={to.y}
                stroke={
                  isActive
                    ? "rgb(var(--text-primary))"
                    : "rgb(var(--border))"
                }
                strokeWidth={isActive ? 2 : 1.5}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              />
              {/* Animated pulse along line */}
              {isActive && (
                <motion.circle
                  r={3}
                  fill="rgb(var(--text-primary))"
                  initial={{ cx: x1, cy: from.y }}
                  animate={{ cx: x2, cy: to.y }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}
              {/* Arrow */}
              <motion.polygon
                points={`${x2 - 8},${from.y - 4} ${x2},${from.y} ${x2 - 8},${from.y + 4}`}
                fill={
                  isActive
                    ? "rgb(var(--text-primary))"
                    : "rgb(var(--text-muted))"
                }
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.15 + 0.3 }}
              />
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const isHovered = hoveredNode === i;

          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              onMouseEnter={() => setHoveredNode(i)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
            >
              {/* Node background */}
              <rect
                x={node.x}
                y={node.y - 18}
                width={node.width}
                height="36"
                rx="6"
                fill={
                  isHovered
                    ? "rgb(var(--text-primary))"
                    : "rgb(var(--surface))"
                }
                stroke={
                  isHovered
                    ? "rgb(var(--text-primary))"
                    : "rgb(var(--border))"
                }
                strokeWidth="1"
              />
              {/* Pulse ring on hover */}
              {isHovered && (
                <motion.rect
                  x={node.x - 3}
                  y={node.y - 21}
                  width={node.width + 6}
                  height="42"
                  rx="8"
                  fill="none"
                  stroke="rgb(var(--text-primary))"
                  strokeWidth="1"
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
              {/* Label */}
              <text
                x={node.x + node.width / 2}
                y={node.y + 5}
                textAnchor="middle"
                fill={
                  isHovered
                    ? "rgb(var(--background))"
                    : "rgb(var(--text-primary))"
                }
                fontSize="12"
                fontFamily="var(--font-mono)"
                fontWeight="600"
              >
                {node.label}
              </text>
              {/* Tooltip */}
              {isHovered && (
                <motion.g
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <rect
                    x={node.x - 10}
                    y={node.y + 26}
                    width={node.width + 20}
                    height="24"
                    rx="4"
                    fill="rgb(var(--surface))"
                    stroke="rgb(var(--border))"
                    strokeWidth="1"
                  />
                  <text
                    x={node.x + node.width / 2}
                    y={node.y + 42}
                    textAnchor="middle"
                    fill="rgb(var(--text-muted))"
                    fontSize="9"
                    fontFamily="var(--font-sans)"
                  >
                    {node.description.length > 30
                      ? node.description.slice(0, 30) + "..."
                      : node.description}
                  </text>
                </motion.g>
              )}
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
