"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-green-light/20 to-brand-green/10">
          <CheckCircle className="h-6 w-6 text-brand-green" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-card-foreground">
          Thank you for reaching out.
        </h3>
        <p className="mt-3 text-base text-muted-foreground">
          We have received your message and will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-8 rounded-2xl border border-border bg-card p-10"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-2.5">
          <label
            htmlFor="name"
            className="text-base font-medium text-card-foreground"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="rounded-xl border border-input bg-background px-5 py-3 text-base text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label
            htmlFor="email"
            className="text-base font-medium text-card-foreground"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="rounded-xl border border-input bg-background px-5 py-3 text-base text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <label
          htmlFor="subject"
          className="text-base font-medium text-card-foreground"
        >
          Subject
          <span className="ml-1 text-muted-foreground">(optional)</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="What is this about?"
          className="rounded-xl border border-input bg-background px-5 py-3 text-base text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <label
          htmlFor="message"
          className="text-base font-medium text-card-foreground"
        >
          Tell us about your situation
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Describe what you are working on, what challenges you are facing, or what you are hoping to achieve. There is no wrong way to start this conversation."
          className="resize-y rounded-xl border border-input bg-background px-5 py-3 text-base leading-relaxed text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
        />
      </div>

      <div>
        <Button type="submit" variant="gradient">
          Send Message
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
