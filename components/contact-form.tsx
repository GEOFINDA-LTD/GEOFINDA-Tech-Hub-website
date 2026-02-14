"use client";

import { Send, CheckCircle, Loader2, AlertTriangle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xwvnolvq");

  if (state.succeeded) {
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

  const hasFormErrors = state.errors
    ? state.errors.getFormErrors().length > 0
    : false;

  const hasFieldError = (field: string) =>
    state.errors ? state.errors.getFieldErrors(field).length > 0 : false;

  const inputBase =
    "rounded-xl border bg-background px-5 py-3 text-base text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:outline-none focus:ring-2";
  const inputNormal = `${inputBase} border-input focus:border-brand-blue focus:ring-brand-blue/20`;
  const inputError = `${inputBase} border-red-400 focus:border-red-500 focus:ring-red-500/20`;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-8 rounded-2xl border border-border bg-card p-10"
    >
      {hasFormErrors && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900/50 dark:bg-red-950/30">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
          <div>
            <p className="text-sm font-medium text-red-800 dark:text-red-300">
              Something went wrong while sending your message.
            </p>
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              Please check your details and try again. If the problem persists,
              feel free to email us directly.
            </p>
          </div>
        </div>
      )}
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
            className={hasFieldError("name") ? inputError : inputNormal}
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-sm text-red-500"
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
            className={hasFieldError("email") ? inputError : inputNormal}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-sm text-red-500"
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
          className={hasFieldError("subject") ? inputError : inputNormal}
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
          className="text-sm text-red-500"
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
          className={`resize-y leading-relaxed ${hasFieldError("message") ? inputError : inputNormal}`}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-sm text-red-500"
        />
      </div>

      <div>
        <Button type="submit" variant="gradient" disabled={state.submitting}>
          {state.submitting ? (
            <>
              Sending…
              <Loader2 className="ml-2 h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
