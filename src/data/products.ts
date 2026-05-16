import { FileSearch, MessagesSquare, type LucideIcon } from "lucide-react";

export type ProductStatus = "Live" | "Beta" | "In development" | "Coming soon" | "Idea stage";

export type Product = {
  name: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  category: ProductCategory;
  features: string[];
  status: ProductStatus;
};

export const categories = ["All", "Documents", "AI Apps"] as const;
export type ProductCategory = Exclude<(typeof categories)[number], "All">;

export const products: Product[] = [
  {
    name: "DocSense",
    description: "Upload any document — get instant answers, summaries, and structured extractions backed by RAG.",
    longDescription:
      "DocSense turns piles of PDFs, contracts, manuals, and reports into a queryable knowledge base. Ask questions in natural language and get cited answers with the source passages highlighted. Built for legal, compliance, and operations teams who waste hours hunting through documents.",
    icon: FileSearch,
    category: "Documents",
    features: ["RAG", "Cited answers", "Bulk extraction", "PDF + DOCX + HTML"],
    status: "In development",
  },
  {
    name: "ChatStack",
    description: "Build branded AI chat assistants on top of your docs, sites, and knowledge bases — in minutes, not weeks.",
    longDescription:
      "ChatStack is the fastest way to ship a chatbot that actually knows your product. Point it at your docs, support tickets, and website. Get a branded, embeddable widget with conversation logging, eval hooks, and full prompt control. No black-box vendor lock-in.",
    icon: MessagesSquare,
    category: "AI Apps",
    features: ["RAG", "Branded widget", "Conversation logs", "Eval hooks"],
    status: "In development",
  },
];
