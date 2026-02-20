export default function Footer() {
  return (
    <footer className="w-full py-6 border-t border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 mt-auto">
      <div className="container mx-auto px-4 max-w-2xl flex justify-center">
        <p className="text-center text-muted-foreground text-sm w-full">
          &copy; 2026 World Clock <span className="mx-2">|</span>
          All rights reserved
          <span className="mx-2">|</span>
          <a
            href="https://github.com/diwasdh/WorldClock/blob/master/LICENSE"
            target="_blank"
            className=" hover:text-primary hover:underline"
          >
            License
          </a>
        </p>
      </div>
    </footer>
  );
}
