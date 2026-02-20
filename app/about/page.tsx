export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16 flex justify-center items-center min-h-[70vh]">
      <section className="w-full max-w-2xl bg-background/95 border border-border rounded-xl shadow-lg p-10 flex flex-col gap-8">
        <header className="flex flex-col items-center gap-1">
          <h1 className="text-4xl font-bold text-primary tracking-tight mb-2">
            About World Clock
          </h1>
          <p className="text-base text-muted-foreground text-center max-w-xl">
            World Clock is a modern web application built with{' '}
            <span className="font-semibold text-foreground">Next.js</span> for
            displaying the current time in any time zone worldwide. The design
            is minimal, elegant, and focused on clarity—just like the clock
            itself.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="rounded-lg bg-linear-to-br from-muted/70 to-background/80 p-6 flex flex-col items-start border border-border">
            <h2 className="text-lg font-semibold text-foreground mb-3 border-b border-border pb-1 w-full">
              Features
            </h2>
            <ul className="space-y-2 text-muted-foreground text-base pl-2">
              <li>
                <span className="font-semibold text-primary">•</span> Select and
                view time in any IANA time zone
              </li>
              <li>
                <span className="font-semibold text-primary">•</span> Real-time
                clock with UTC offset
              </li>
              <li>
                <span className="font-semibold text-primary">•</span> Minimal,
                modern, and responsive UI
              </li>
              <li>
                <span className="font-semibold text-primary">•</span> Fast
                Next.js App Router
              </li>
              <li>
                <span className="font-semibold text-primary">•</span>{' '}
                Mobile-friendly design
              </li>
            </ul>
          </div>
          <div className="rounded-lg bg-linear-to-br from-muted/70 to-background/80 p-6 flex flex-col items-start border border-border">
            <h2 className="text-lg font-semibold text-foreground mb-3 border-b border-border pb-1 w-full">
              Technologies
            </h2>
            <ul className="space-y-2 text-muted-foreground text-base pl-2">
              <li>
                <span className="font-semibold text-primary">•</span> Next.js
                (App Router)
              </li>
              <li>
                <span className="font-semibold text-primary">•</span> React
              </li>
              <li>
                <span className="font-semibold text-primary">•</span> TypeScript
              </li>
              <li>
                <span className="font-semibold text-primary">•</span> Tailwind
                CSS
              </li>
              <li>
                <span className="font-semibold text-primary">•</span> Bun, npm,
                or yarn
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center mt-4">
          <a
            href="https://github.com/Diwasdh/new_nextjs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80 text-base font-medium transition-colors"
            aria-label="View source on GitHub"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"
                fill="currentColor"
              />
            </svg>
            <span>View source on GitHub</span>
          </a>
        </div>
      </section>
    </main>
  );
}
