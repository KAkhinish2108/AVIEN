"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import type { ChatMessage } from "@/lib/chat";

const seed: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "I am the AVIEN concierge. Describe what you are building — payments, identity, maps — and I will shortlist APIs from the index. No key is required yet.",
  },
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(seed);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
  }, [messages, open]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text || pending) return;

    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setPending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = (await res.json()) as { reply?: string };
      setMessages([
        ...next,
        {
          role: "assistant",
          content: data.reply ?? "Something went quiet. Try again in a moment.",
        },
      ]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content: "I could not reach the concierge. Check the local server and try once more.",
        },
      ]);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <section className="flex h-[min(520px,70vh)] w-[min(380px,calc(100vw-3rem))] flex-col rounded-lg border border-border bg-surface shadow-[0_8px_30px_rgba(23,23,23,0.08)]">
          <header className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="text-[11px] tracking-[0.22em] text-champagne">
                AVIEN · CONCIERGE
              </p>
              <p className="mt-1 text-sm text-foreground">Ask about the index</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-secondary transition-colors hover:text-foreground"
              aria-label="Close concierge"
            >
              ✕
            </button>
          </header>
          <div ref={scroller} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={message.role === "user" ? "ml-8 text-right" : "mr-6"}
              >
                <p className="mb-1 text-[10px] tracking-[0.16em] text-muted">
                  {message.role === "user" ? "YOU" : "AVIEN"}
                </p>
                <p
                  className={`whitespace-pre-wrap rounded-sm text-[13px] leading-relaxed ${
                    message.role === "user"
                      ? "bg-surface-muted px-3 py-2 text-foreground"
                      : "text-secondary"
                  }`}
                >
                  {message.content}
                </p>
              </div>
            ))}
            {pending && (
              <p className="text-[13px] text-muted">Looking through the index…</p>
            )}
          </div>
          <form onSubmit={onSubmit} className="border-t border-border p-3">
            <label className="sr-only" htmlFor="avien-chat">
              Message
            </label>
            <div className="flex gap-2">
              <input
                id="avien-chat"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="I need UPI payments…"
                className="min-w-0 flex-1 rounded-sm bg-background px-3 py-2 text-sm outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                disabled={pending}
                className="btn-primary rounded-sm bg-primary px-3 py-2 text-[12px] font-medium tracking-wide text-background hover:bg-primary-hover disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="fab-hover h-12 w-12 rounded-full bg-primary text-background shadow-lg transition-colors hover:bg-primary-hover"
        aria-label={open ? "Close concierge" : "Open concierge"}
      >
        {open ? "✕" : "◆"}
      </button>
    </div>
  );
}
