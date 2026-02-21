"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "Developer", x: 50, y: 50, color: "#3B82F6" },
  { label: "CLI", x: 200, y: 50, color: "#3B82F6" },
  { label: "Routing Layer", x: 380, y: 50, color: "#6366F1" },
  { label: "Model Pool", x: 560, y: 50, color: "#6366F1" },
  { label: "GPU VMs", x: 720, y: 50, color: "#10B981" },
];

const connections = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
];

export function ArchitectureDiagram() {
  return (
    <div className="overflow-x-auto rounded border border-border-subtle bg-[#0a0e17] p-6">
      <svg
        viewBox="0 0 820 100"
        className="mx-auto h-auto min-w-[700px] max-w-full"
        fill="none"
      >
        {connections.map((conn, i) => {
          const from = nodes[conn.from];
          const to = nodes[conn.to];
          return (
            <motion.line
              key={i}
              x1={from.x + 55}
              y1={from.y}
              x2={to.x - 5}
              y2={to.y}
              stroke="#1F2937"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            />
          );
        })}

        {nodes.map((node, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
          >
            <rect
              x={node.x - 10}
              y={node.y - 18}
              width={node.label.length * 10 + 20}
              height="36"
              rx="4"
              fill={node.color + "15"}
              stroke={node.color + "40"}
              strokeWidth="1"
            />
            <text
              x={node.x + (node.label.length * 10 + 20) / 2 - 10}
              y={node.y + 5}
              textAnchor="middle"
              fill={node.color}
              fontSize="13"
              fontFamily="var(--font-mono)"
              fontWeight="500"
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {connections.map((conn, i) => {
          const from = nodes[conn.from];
          const to = nodes[conn.to];
          const midX = (from.x + 55 + to.x - 5) / 2;
          return (
            <motion.polygon
              key={`arrow-${i}`}
              points={`${midX - 4},${from.y - 4} ${midX + 4},${from.y} ${midX - 4},${from.y + 4}`}
              fill="#9CA3AF"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.15 + 0.3 }}
            />
          );
        })}
      </svg>
    </div>
  );
}
