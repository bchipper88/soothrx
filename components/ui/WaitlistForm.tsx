"use client";

import { useState, FormEvent } from "react";

export default function WaitlistForm({
  showExtras = false,
  buttonText = "Join the Waitlist",
  className = "",
}: {
  showExtras?: boolean;
  buttonText?: string;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [condition, setCondition] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: name || undefined, condition: condition || undefined }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Lead");
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={`text-center ${className}`}>
        <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-6 py-3 text-accent font-medium">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          You&apos;re on the list! We&apos;ll be in touch soon.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 ${className}`}>
      <div className="flex flex-col gap-3">
        {showExtras && (
          <>
            <input
              type="text"
              placeholder="First name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg border border-border bg-white px-4 py-3 text-base text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              aria-label="Primary pain condition"
              className="rounded-lg border border-border bg-white px-4 py-3 text-base text-text-primary focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <option value="">Primary pain condition (optional)</option>
              <option value="joint">Joint / Arthritis Pain</option>
              <option value="back">Back / Muscle Pain</option>
              <option value="nerve">Nerve Pain (Neuropathy)</option>
              <option value="other">Other</option>
            </select>
          </>
        )}
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
          className="w-full rounded-lg border border-border bg-white px-5 py-4 text-lg text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-3 text-sm font-medium text-primary transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
        >
          {status === "loading" ? (
            <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
          ) : (
            <>
              {buttonText}
              <span aria-hidden="true">&rarr;</span>
            </>
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}
    </form>
  );
}
