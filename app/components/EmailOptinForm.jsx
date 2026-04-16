"use client";

import { useState } from "react";

export default function EmailOptinForm({
  inputId,
  buttonLabel,
  showLabel = true,
  formClassName = "",
  rowClassName = "",
  inputClassName = "",
  buttonClassName = "",
  messageClassName = ""
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("You are on the list. We will send updates soon.");
      setEmail("");
    } catch (_error) {
      setStatus("error");
      setMessage("Could not submit right now. Please try again.");
    }
  }

  return (
    <form
      className={`rounded-2xl bg-surface-container p-4 ${formClassName}`.trim()}
      onSubmit={handleSubmit}
    >
      {showLabel ? (
        <label
          htmlFor={inputId}
          className="font-label text-xs font-bold uppercase tracking-[0.16em] text-on-surface-variant"
        >
          Get launch updates
        </label>
      ) : null}
      <div className={`${showLabel ? "mt-3" : ""} flex items-center gap-2 ${rowClassName}`.trim()}>
        <input
          id={inputId}
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className={`h-12 flex-1 rounded-full border border-outline-variant/20 bg-surface-container-low px-4 text-sm text-on-surface placeholder:text-on-surface-variant/70 focus:border-primary focus:outline-none ${inputClassName}`.trim()}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`h-12 rounded-full bg-gradient-to-br from-primary-dim to-primary px-5 font-headline text-xs font-extrabold uppercase tracking-wider text-on-primary-fixed transition-transform duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 ${buttonClassName}`.trim()}
        >
          {status === "loading" ? "Sending..." : buttonLabel}
        </button>
      </div>
      {message ? (
        <p
          className={`mt-3 text-xs ${messageClassName} ${
            status === "success" ? "text-secondary" : "text-error"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
