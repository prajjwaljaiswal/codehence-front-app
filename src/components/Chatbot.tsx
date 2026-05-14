import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, User2 } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const QUICK = [
  "What tools do you offer?",
  "How do I fine-tune a model?",
  "Pricing?",
  "Talk to a human",
];

// Mock response generator — replace with OpenAI/Anthropic call by wiring an
// `OPENAI_API_KEY` secret and a server function. Keeping local for the demo.
function mockReply(input: string): string {
  const q = input.toLowerCase();
  if (q.includes("tool"))
    return "Codehence offers 15+ tools across Text & Language, Image & Vision, Data & Analytics, Model Training, and Deployment. Browse them on the Tools page!";
  if (q.includes("fine") || q.includes("train"))
    return "You can fine-tune LLaMA, Mistral, GPT, BERT, or Stable Diffusion using LoRA/QLoRA. Upload your dataset, pick a base model, set hyperparameters, and we handle the GPUs.";
  if (q.includes("price") || q.includes("cost") || q.includes("pricing"))
    return "We offer pay-as-you-go inference and flat-rate training plans. Free tier includes $20/mo of compute. Hit Contact for an enterprise quote.";
  if (q.includes("deploy"))
    return "One-click deploy turns any model into a REST API with autoscaling, canary rollouts, and instant rollback.";
  return "Great question! I can help with our tools, training workflows, fine-tuning, deployment, or pricing. What would you like to know more about?";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm the Codehence AI Assistant. I can help with our tools, model training, fine-tuning, deployment, or pricing. How can I help?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [humanForm, setHumanForm] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, humanForm]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    if (t.toLowerCase().includes("human")) {
      setMessages((m) => [...m, { role: "user", content: t }]);
      setHumanForm(true);
      return;
    }
    setMessages((m) => [...m, { role: "user", content: t }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", content: mockReply(t) }]);
      setTyping(false);
    }, 700 + Math.random() * 600);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setOpen(true)}
        className={`pulse-glow fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-transform hover:scale-110 ${
          open ? "pointer-events-none opacity-0" : ""
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 22 }}
            className="glass-strong fixed bottom-6 right-6 z-50 flex h-[560px] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl shadow-elegant"
          >
            <div className="flex items-center justify-between border-b border-border/50 bg-gradient-primary px-4 py-3 text-primary-foreground">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/20">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Codehence AI Assistant</div>
                  <div className="text-[10px] opacity-80">Online · usually replies instantly</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex items-end gap-2 ${m.role === "user" ? "justify-end" : ""}`}
                >
                  {m.role === "assistant" && (
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-primary">
                      <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
                    </span>
                  )}
                  <div
                    className={`max-w-[78%] rounded-2xl px-3.5 py-2 text-sm ${
                      m.role === "user"
                        ? "bg-gradient-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {m.content}
                  </div>
                  {m.role === "user" && (
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-muted">
                      <User2 className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
              ))}
              {typing && (
                <div className="flex items-end gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-primary">
                    <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
                  </span>
                  <div className="flex gap-1 rounded-2xl bg-muted px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {humanForm && <HumanForm onDone={() => setHumanForm(false)} />}
            </div>

            {!humanForm && (
              <>
                <div className="flex flex-wrap gap-1.5 border-t border-border/50 px-3 py-2">
                  {QUICK.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {q}
                    </button>
                  ))}
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    send(input);
                  }}
                  className="flex items-center gap-2 border-t border-border/50 p-3"
                >
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask anything…"
                    className="flex-1 rounded-xl border border-border bg-input/50 px-3 py-2 text-sm outline-none focus:border-primary/60"
                  />
                  <button
                    type="submit"
                    className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground transition-transform hover:scale-105"
                    aria-label="Send"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HumanForm({ onDone }: { onDone: () => void }) {
  const [done, setDone] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-border bg-card/60 p-4"
    >
      {done ? (
        <div className="text-center text-sm">
          <div className="mb-2 text-2xl">✅</div>
          Thanks! Our team will reach out within 1 business day.
          <button
            onClick={onDone}
            className="mt-3 block w-full rounded-lg border border-border px-3 py-1.5 text-xs"
          >
            Close
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="space-y-2"
        >
          <div className="text-sm font-semibold">Connect with our team</div>
          <input required placeholder="Your name" className="w-full rounded-lg border border-border bg-input/50 px-3 py-2 text-sm outline-none focus:border-primary/60" />
          <input required type="email" placeholder="Email" className="w-full rounded-lg border border-border bg-input/50 px-3 py-2 text-sm outline-none focus:border-primary/60" />
          <textarea required rows={3} placeholder="How can we help?" className="w-full resize-none rounded-lg border border-border bg-input/50 px-3 py-2 text-sm outline-none focus:border-primary/60" />
          <button className="w-full rounded-lg bg-gradient-primary py-2 text-sm font-semibold text-primary-foreground">
            Send
          </button>
        </form>
      )}
    </motion.div>
  );
}
