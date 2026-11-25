/**
 * The state the app is in while it checks the session and loads the bank.
 */
export function LoadingScreen() {
  return (
    <div className="grid min-h-svh place-items-center bg-canvas px-4">
      <div className="flex flex-col items-center gap-3 text-center">
        <span
          className="size-6 animate-spin rounded-full border-2 border-line border-t-accent"
          aria-hidden="true"
        />
        <p className="text-sm text-ink-2">Loading…</p>
      </div>
    </div>
  )
}
