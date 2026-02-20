import Link from 'next/link';

export default function Header({
  extraFontClass = '',
}: {
  extraFontClass?: string;
}) {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 py-4 max-w-2xl">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`text-2xl font-bold text-primary ${extraFontClass}`}
          >
            World Clock
          </Link>
          <nav className="hidden md:flex space-x-6">
            <a
              href="/WorldClock/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
