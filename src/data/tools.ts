import {
  PenLine,
  FileText,
  Languages,
  Code2,
  ImagePlus,
  ScanSearch,
  Eraser,
  TrendingUp,
  Sparkles,
  BarChart3,
  Cpu,
  Wand2,
  FolderCog,
  Rocket,
  Network,
  Activity,
  type LucideIcon,
} from "lucide-react";

export type Tool = {
  name: string;
  description: string;
  icon: LucideIcon;
  category: ToolCategory;
  features: string[];
};

export const categories = [
  "All",
  "Text & Language",
  "Image & Vision",
  "Data & Analytics",
  "Model Training",
  "Deployment",
] as const;
export type ToolCategory = Exclude<(typeof categories)[number], "All">;

export const tools: Tool[] = [
  // Text & Language
  { name: "AI Writer", description: "Generate long-form content, blogs, and marketing copy with style control.", icon: PenLine, category: "Text & Language", features: ["Tone control", "SEO", "Multi-lang"] },
  { name: "Summarizer", description: "Condense documents, transcripts, and articles into crisp insights.", icon: FileText, category: "Text & Language", features: ["Bullet mode", "TL;DR", "Long context"] },
  { name: "Translator", description: "Real-time, context-aware translation across 100+ languages.", icon: Languages, category: "Text & Language", features: ["100+ langs", "Glossary", "Streaming"] },
  { name: "Code Generator", description: "Generate, refactor, and explain code across 30+ languages.", icon: Code2, category: "Text & Language", features: ["Refactor", "Tests", "Docs"] },

  // Image & Vision
  { name: "Image Generator", description: "Create high-fidelity images from text prompts with style presets.", icon: ImagePlus, category: "Image & Vision", features: ["SDXL", "Styles", "Upscale"] },
  { name: "Object Detector", description: "Detect, classify, and track objects in images and video streams.", icon: ScanSearch, category: "Image & Vision", features: ["YOLOv9", "Tracking", "Realtime"] },
  { name: "Background Remover", description: "One-click background removal with edge-perfect alpha masks.", icon: Eraser, category: "Image & Vision", features: ["Batch", "API", "Hi-res"] },

  // Data & Analytics
  { name: "Predictive Analytics Engine", description: "Forecast trends and surface anomalies from time-series data.", icon: TrendingUp, category: "Data & Analytics", features: ["Forecasting", "Anomaly", "AutoML"] },
  { name: "Data Cleaning Bot", description: "Detect duplicates, fix types, and normalize messy datasets.", icon: Sparkles, category: "Data & Analytics", features: ["Dedup", "Schema infer", "Pipelines"] },
  { name: "Chart Explainer", description: "Turn charts and dashboards into plain-English narratives.", icon: BarChart3, category: "Data & Analytics", features: ["Insights", "PDF export", "Slack"] },

  // Model Training
  { name: "Custom Model Trainer", description: "Train models from scratch on managed GPU clusters.", icon: Cpu, category: "Model Training", features: ["A100/H100", "Distributed", "Checkpoints"] },
  { name: "Fine-Tuner for LLMs", description: "LoRA / QLoRA fine-tuning for LLaMA, Mistral, GPT and more.", icon: Wand2, category: "Model Training", features: ["LoRA", "QLoRA", "PEFT"] },
  { name: "Dataset Manager", description: "Version, label, and split datasets with built-in validation.", icon: FolderCog, category: "Model Training", features: ["Versioning", "Labels", "Splits"] },

  // Deployment
  { name: "One-Click Model Deploy", description: "Ship any model as a scalable REST API in seconds.", icon: Rocket, category: "Deployment", features: ["Autoscale", "Canary", "Rollback"] },
  { name: "API Gateway", description: "Auth, rate-limit, and route inference traffic safely.", icon: Network, category: "Deployment", features: ["JWT", "Quotas", "Logs"] },
  { name: "Model Monitor", description: "Track drift, latency, and cost in real time.", icon: Activity, category: "Deployment", features: ["Drift", "Alerts", "SLO"] },
];
