"use client";

import { motion } from "framer-motion";
import {
  Network,
  Cpu,
  TrendingUp,
  Gauge,
  DollarSign,
  Layers,
  Workflow,
  Zap,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeader } from "@/components/section";

function CodeBlock({ title, children }: { title: string; children: string }) {
  return (
    <div className="overflow-hidden rounded border border-border-subtle">
      <div className="border-b border-border-subtle bg-surface px-4 py-2.5">
        <span className="font-mono text-xs text-text-muted">{title}</span>
      </div>
      <pre className="overflow-x-auto bg-[#0a0e17] p-4 font-mono text-sm leading-6 text-text-muted">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function ArchSection({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <Section className="border-t border-border-subtle">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-accent/10">
            <Icon className="h-5 w-5 text-accent" />
          </div>
          <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
          <p className="mt-3 leading-relaxed text-text-muted">{description}</p>
        </div>
        <div>{children}</div>
      </div>
    </Section>
  );
}

export default function ArchitecturePage() {
  return (
    <>
      <PageHeader
        label="Architecture"
        title="System Architecture"
        description="A deep technical breakdown of how Lade Stack is designed. From model routing to GPU serving, every layer is built for performance, reliability, and cost efficiency."
      />

      {/* High-Level System Design */}
      <Section>
        <SectionHeader
          label="Overview"
          title="High-Level System Design"
          description="The system is composed of four primary layers: CLI interface, routing engine, model serving, and GPU infrastructure."
        />
        <div className="grid gap-3 md:grid-cols-4">
          {[
            {
              label: "CLI Layer",
              items: ["Command Parser", "Context Loader", "Config Manager", "Output Formatter"],
              color: "#3B82F6",
            },
            {
              label: "Routing Layer",
              items: ["Task Classifier", "Model Selector", "Cost Optimizer", "Fallback Handler"],
              color: "#6366F1",
            },
            {
              label: "Serving Layer",
              items: ["vLLM Runtime", "Batch Scheduler", "KV Cache Manager", "Token Streamer"],
              color: "#8B5CF6",
            },
            {
              label: "Infrastructure",
              items: ["GPU Pool Manager", "Auto Scaler", "Health Monitor", "Model Registry"],
              color: "#10B981",
            },
          ].map((layer, i) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded border border-border-subtle bg-surface p-5"
            >
              <h3
                className="mb-3 text-sm font-bold uppercase tracking-wider"
                style={{ color: layer.color }}
              >
                {layer.label}
              </h3>
              <ul className="space-y-2">
                {layer.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-text-muted"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: layer.color + "60" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-text-muted">
          {["CLI", "Router", "Serving", "GPU"].map((label, i) => (
            <span key={label} className="flex items-center gap-2">
              <span className="rounded bg-surface px-3 py-1 font-mono text-xs">
                {label}
              </span>
              {i < 3 && <ArrowRight className="h-3 w-3" />}
            </span>
          ))}
        </div>
      </Section>

      {/* Model Routing Layer */}
      <ArchSection
        icon={Network}
        title="Model Routing Layer"
        description="The routing engine classifies incoming tasks and selects the optimal model based on task type, context length, latency requirements, and cost constraints. Routing decisions are transparent and logged for debugging."
      >
        <CodeBlock title="routing-config.yaml">
{`routing:
  strategy: "task-optimized"
  rules:
    - task: code_generation
      primary: qwen-coder-32b
      fallback: deepseek-coder-v2
      max_latency_ms: 2000

    - task: debugging
      primary: deepseek-r1
      fallback: qwen-coder-32b
      max_latency_ms: 5000

    - task: long_context
      primary: kimi-128k
      context_threshold: 32000
      max_latency_ms: 10000

    - task: multilingual
      primary: glm-4
      fallback: qwen-coder-32b`}
        </CodeBlock>
      </ArchSection>

      {/* GPU Serving Layer */}
      <ArchSection
        icon={Cpu}
        title="GPU Serving Layer"
        description="Models are served through vLLM or TensorRT-LLM for maximum throughput. Continuous batching, PagedAttention, and speculative decoding minimize latency and maximize GPU utilization."
      >
        <CodeBlock title="serving-config.yaml">
{`serving:
  engine: vllm
  config:
    tensor_parallel_size: 2
    max_num_batched_tokens: 32768
    gpu_memory_utilization: 0.90
    enable_chunked_prefill: true
    max_model_len: 131072

  models:
    - name: qwen-coder-32b
      quantization: awq-4bit
      gpu_count: 2
      max_concurrent: 16

    - name: deepseek-r1
      quantization: gptq-8bit
      gpu_count: 4
      max_concurrent: 8`}
        </CodeBlock>
      </ArchSection>

      {/* Auto Scaling */}
      <ArchSection
        icon={TrendingUp}
        title="Auto Scaling Strategy"
        description="The auto scaler monitors request queue depth, GPU utilization, and latency percentiles to make scaling decisions. Scale-up is aggressive to minimize wait times. Scale-down uses a cooldown period to prevent thrashing."
      >
        <CodeBlock title="autoscaler-policy.yaml">
{`autoscaling:
  min_replicas: 1
  max_replicas: 8
  metrics:
    - type: queue_depth
      target: 10
      scale_up_threshold: 20
      scale_down_threshold: 3

    - type: gpu_utilization
      target: 0.75
      scale_up_threshold: 0.85
      scale_down_threshold: 0.40

    - type: p99_latency_ms
      scale_up_threshold: 5000

  cooldown:
    scale_up: 60s
    scale_down: 300s`}
        </CodeBlock>
      </ArchSection>

      {/* Quantization */}
      <ArchSection
        icon={Layers}
        title="Quantization Strategy"
        description="Models are quantized to reduce memory footprint and improve throughput without significant quality loss. AWQ 4-bit quantization is the default for coding models, while 8-bit GPTQ is used for reasoning models where precision matters more."
      >
        <div className="space-y-4">
          {[
            {
              method: "AWQ 4-bit",
              use: "Code generation models",
              memory: "~50% reduction",
              quality: "< 1% degradation on HumanEval",
            },
            {
              method: "GPTQ 8-bit",
              use: "Reasoning models",
              memory: "~25% reduction",
              quality: "< 0.5% degradation on MMLU",
            },
            {
              method: "FP16",
              use: "Critical accuracy tasks",
              memory: "Baseline",
              quality: "Full precision",
            },
          ].map((q) => (
            <div
              key={q.method}
              className="rounded border border-border-subtle bg-[#0a0e17] p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-sm font-semibold text-accent">
                  {q.method}
                </span>
                <span className="text-xs text-text-muted">{q.memory}</span>
              </div>
              <p className="text-sm text-text-muted">
                <span className="text-text-primary">{q.use}</span> — {q.quality}
              </p>
            </div>
          ))}
        </div>
      </ArchSection>

      {/* Multi-Model Pool */}
      <ArchSection
        icon={Workflow}
        title="Multi-Model Pool Design"
        description="The model pool maintains warm instances of frequently used models and cold-starts less common ones on demand. Models share GPU memory through intelligent scheduling and preemption policies."
      >
        <CodeBlock title="model-pool.yaml">
{`pool:
  warm_models:
    - qwen-coder-32b    # Always loaded
    - deepseek-r1       # Always loaded

  cold_models:
    - glm-4             # Load on demand
    - kimi-128k         # Load on demand

  scheduling:
    strategy: priority_preemptive
    preemption_policy: recompute
    max_loading_concurrent: 2

  memory:
    shared_gpu_memory: true
    swap_space: 32GB
    cache_dtype: auto`}
        </CodeBlock>
      </ArchSection>

      {/* Latency Optimization */}
      <ArchSection
        icon={Gauge}
        title="Latency Optimization"
        description="Multiple techniques are employed to minimize time-to-first-token and overall response latency across the inference pipeline."
      >
        <div className="space-y-3">
          {[
            {
              technique: "Continuous Batching",
              detail: "New requests are added to running batches without waiting for batch completion",
            },
            {
              technique: "PagedAttention",
              detail: "KV cache is managed in pages, eliminating memory fragmentation and enabling larger batch sizes",
            },
            {
              technique: "Speculative Decoding",
              detail: "Small draft model generates candidates that the main model verifies in parallel",
            },
            {
              technique: "Prefix Caching",
              detail: "Common system prompts and workspace context are cached across requests",
            },
            {
              technique: "Chunked Prefill",
              detail: "Long prompts are processed in chunks to interleave with decode steps from other requests",
            },
          ].map((item) => (
            <div
              key={item.technique}
              className="rounded border border-border-subtle bg-[#0a0e17] p-4"
            >
              <h4 className="mb-1 font-mono text-sm font-semibold text-success">
                {item.technique}
              </h4>
              <p className="text-sm text-text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </ArchSection>

      {/* Cost Optimization */}
      <ArchSection
        icon={DollarSign}
        title="Cost Optimization"
        description="Infrastructure costs are optimized through a combination of spot instances, right-sizing, quantization, and intelligent scheduling."
      >
        <div className="space-y-3">
          {[
            {
              strategy: "Spot Instance Integration",
              detail: "Non-critical workloads run on spot/preemptible instances with automatic failover to on-demand",
            },
            {
              strategy: "Right-Sizing",
              detail: "GPU allocation matches model requirements — no paying for A100s when an L4 will do",
            },
            {
              strategy: "Request Batching",
              detail: "Concurrent requests share GPU compute through continuous batching, maximizing utilization",
            },
            {
              strategy: "Idle Shutdown",
              detail: "Unused model instances are unloaded after configurable idle periods to free GPU memory",
            },
          ].map((item) => (
            <div
              key={item.strategy}
              className="rounded border border-border-subtle bg-[#0a0e17] p-4"
            >
              <h4 className="mb-1 font-mono text-sm font-semibold text-accent">
                {item.strategy}
              </h4>
              <p className="text-sm text-text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </ArchSection>

      {/* Future Roadmap */}
      <Section className="border-t border-border-subtle">
        <SectionHeader
          label="Roadmap"
          title="Future Architecture"
          description="Planned architectural enhancements that will expand capability and efficiency."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Fine-Tuning Pipeline",
              description:
                "On-infrastructure fine-tuning with LoRA adapters. Train domain-specific models on your own data without leaving your environment.",
            },
            {
              icon: Layers,
              title: "Model Distillation",
              description:
                "Distill large models into smaller, faster variants optimized for your specific use cases. Reduce latency and cost while maintaining quality.",
            },
            {
              icon: Network,
              title: "Hybrid Fallback",
              description:
                "Optional fallback to external API providers when local infrastructure is at capacity. Configurable cost and privacy thresholds.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded border border-border-subtle bg-surface p-6"
            >
              <item.icon className="mb-4 h-5 w-5 text-accent-secondary" />
              <h3 className="mb-2 text-base font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
