"use client";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;

    const nextTheme =
      root.dataset.theme === "dark" ? "light" : "dark";

    root.dataset.theme = nextTheme;

    try {
      localStorage.setItem("first-theme", nextTheme);
    } catch {}

    const themeColorMeta = document.querySelector(
      'meta[name="theme-color"]'
    );

    if (themeColorMeta) {
      themeColorMeta.setAttribute(
        "content",
        nextTheme === "dark" ? "#070b12" : "#f6f8fc"
      );
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Alternar tema"
      title="Alternar tema"
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:border-brand hover:text-brand"
    >
      {/* Lua */}
      <svg
        className="theme-icon-moon h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 15A9.72 9.72 0 0 1 9 3.25 9.75 9.75 0 1 0 21.75 15Z"
        />
      </svg>

      {/* Sol */}
      <svg
        className="theme-icon-sun h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="3.5"
        />

        <path
          strokeLinecap="round"
          d="M12 2.5v2
             M12 19.5v2
             M21.5 12h-2
             M4.5 12h-2
             M18.72 5.28l-1.42 1.42
             M6.7 17.3l-1.42 1.42
             M18.72 18.72l-1.42-1.42
             M6.7 6.7 5.28 5.28"
        />
      </svg>
    </button>
  );
}