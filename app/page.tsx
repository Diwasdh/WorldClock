import dynamic from 'next/dynamic';
const TimeZoneClock = dynamic(() => import('./components/TimeZoneClock'), {});

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 flex justify-center min-h-[60vh]">
      <div className="flex flex-col gap-8 items-center justify-center md:justify-start mt-0 md:mt-12 w-full max-w-2xl">
        <TimeZoneClock />
      </div>
    </main>
  );
}
