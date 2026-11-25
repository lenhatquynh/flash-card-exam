"use client";

import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { ApiError } from "@/lib/api";
import { validatePassword, validateUsername } from "@/lib/validation";
import { LogIn, UserPlus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "./AuthProvider";

type Mode = "sign-in" | "sign-up";

/**
 * The account screen.
 *
 * A learner can sign in or create an account with a username and a password.
 * An account is what carries progress between devices.
 */
export function AuthScreen() {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<Mode>("sign-in");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const isSignUp = mode === "sign-up";

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    const usernameError = validateUsername(username);
    if (usernameError) {
      setError(usernameError);
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    setBusy(true);
    try {
      if (isSignUp) {
        await signUp(username, password);
      } else {
        await signIn(username, password);
      }
    } catch (caught) {
      setError(
        caught instanceof ApiError
          ? caught.message
          : "Something went wrong. Try again.",
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-svh bg-canvas">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex w-full max-w-md items-center gap-3 px-4 py-3">
          <h1 className="text-base font-semibold text-ink">SAA-C03 Exam</h1>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-md flex-col gap-8 px-4 py-16">
        <section>
          <h2 className="text-2xl font-semibold text-ink">
            {isSignUp ? "Create an account" : "Sign in"}
          </h2>
          <p className="mt-2 leading-relaxed text-ink-2">
            {isSignUp
              ? "An account keeps your study progress and exam history in step across your laptop and your phone."
              : "Sign in to pick up where you left off on any device."}
          </p>
        </section>

        <section className="rounded-md border border-line bg-surface p-5">
          <form onSubmit={submit} className="flex flex-col gap-4">
            <Field
              label="Username"
              hint="Letters, digits and underscores. 3 to 32 characters."
              error={error && error.includes("username") ? error : undefined}
            >
              {(id) => (
                <input
                  id={id}
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  autoCapitalize="none"
                  spellCheck={false}
                  required
                  className="h-10 w-full rounded-md border border-line bg-surface px-3 text-base text-ink transition-colors duration-150 hover:border-line-strong focus:border-accent focus-visible:shadow-[var(--ring)]"
                />
              )}
            </Field>

            <Field
              label="Password"
              hint="At least 8 characters."
              error={error && error.includes("password") ? error : undefined}
            >
              {(id) => (
                <input
                  id={id}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete={isSignUp ? "new-password" : "current-password"}
                  required
                  className="h-10 w-full rounded-md border border-line bg-surface px-3 text-base text-ink transition-colors duration-150 hover:border-line-strong focus:border-accent focus-visible:shadow-[var(--ring)]"
                />
              )}
            </Field>

            {error &&
              !error.includes("username") &&
              !error.includes("password") && (
                <p
                  role="alert"
                  className="rounded-md border border-bad bg-bad-soft px-3 py-2 text-sm text-bad"
                >
                  {error}
                </p>
              )}

            <Button
              type="submit"
              variant="primary"
              block
              disabled={busy}
              icon={
                isSignUp ? (
                  <UserPlus className="size-4" />
                ) : (
                  <LogIn className="size-4" />
                )
              }
            >
              {busy ? "Working…" : isSignUp ? "Create account" : "Sign in"}
            </Button>

            <p className="text-sm text-ink-2">
              {isSignUp ? "Already have an account?" : "No account yet?"}{" "}
              <button
                type="button"
                onClick={() => {
                  setMode(isSignUp ? "sign-in" : "sign-up");
                  setError(null);
                }}
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover"
              >
                {isSignUp ? "Sign in instead" : "Create one"}
              </button>
            </p>
          </form>
        </section>

        <section className="border-t border-line pt-6">
          <p className="text-sm text-ink-2">
            You can study without an account. Your progress will stay in this
            browser only.{" "}
            <Link
              href="/study"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover"
            >
              Continue without an account
            </Link>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
