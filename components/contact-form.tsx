"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
          <Send className="h-5 w-5 text-accent" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-card-foreground">
          Thank you for reaching out.
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We have received your message and will be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        // Mock submission — replace with real API call
        setSubmitted(true)
      }}
      className="flex flex-col gap-6 rounded-lg border border-border bg-card p-8"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-card-foreground"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-card-foreground"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="subject"
          className="text-sm font-medium text-card-foreground"
        >
          Subject
          <span className="ml-1 text-muted-foreground">(optional)</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="What is this about?"
          className="rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-card-foreground"
        >
          Tell us about your situation
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Describe what you are working on, what challenges you are facing, or what you are hoping to achieve. There is no wrong way to start this conversation."
          className="resize-y rounded-md border border-input bg-background px-4 py-2.5 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Send Message
          <Send className="ml-2 h-4 w-4" />
        </button>
      </div>
    </form>
  )
}
