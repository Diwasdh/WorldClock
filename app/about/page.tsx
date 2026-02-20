import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-primary mb-4">
        About World Clock
      </h1>
      <p className="mb-4">
        A modern web application built with <strong>Next.js</strong> for
        displaying time across multiple time zones worldwide.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Features</h2>
      <ul className="list-disc list-inside mb-4 text-muted-foreground">
        <li>🌍 View current time in multiple cities</li>
        <li>🕐 Real-time clock updates</li>
        <li>🎨 Clean and responsive UI</li>
        <li>⚡ Fast performance with Next.js</li>
        <li>📱 Mobile-friendly design</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Technologies Used</h2>
      <ul className="list-disc list-inside mb-4 text-muted-foreground">
        <li>Next.js</li>
        <li>React</li>
        <li>CSS/Tailwind CSS</li>
        <li>JavaScript</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">License</h2>
      <Link href="/license" className="text-muted-foreground">
        MIT License
      </Link>
    </main>
  );
}
