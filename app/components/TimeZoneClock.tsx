'use client';
import { useState, useEffect, useMemo } from 'react';
import { worldTimeZones } from '../../data/locale';
import { Monoton } from 'next/font/google';

const monoton = Monoton({ subsets: ['latin'], weight: '400' });

interface TimeZoneInfoProps {
  city: string;
  country: string;
  tz: string;
  utcOffset?: string;
}

interface TimeZoneSelectorProps {
  selectedTz: string;
  onChange: (tz: string) => void;
}

function ClockDisplay({ time }: { time: string }) {
  return (
    <span
      className={`text-primary mb-2 ${monoton.className} text-7xl sm:text-8xl drop-shadow-lg`}
      style={{ letterSpacing: '0.05em' }}
    >
      {time}
    </span>
  );
}

function TimeZoneSelector({ selectedTz, onChange }: TimeZoneSelectorProps) {
  return (
    <div className="w-full flex flex-col items-center mt-2">
      <label
        htmlFor="timezone"
        className="block mb-2 font-semibold text-foreground"
      >
        Select Timezone
      </label>
      <select
        id="timezone"
        className="border border-border rounded px-4 py-2 bg-background text-foreground w-full max-w-md"
        value={selectedTz}
        onChange={(e) => onChange(e.target.value)}
      >
        {worldTimeZones.map((zone) => (
          <option key={zone.tz} value={zone.tz}>
            {zone.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function getTimeInZone(tz: string) {
  return new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: tz,
  });
}

function TimeZoneInfo({ city, country, tz, utcOffset }: TimeZoneInfoProps) {
  return (
    <div className="flex flex-col items-center text-muted-foreground text-lg font-semibold mb-4">
      <span>
        {city}, {country}
      </span>
      <span className="text-sm mt-1">
        {tz} {utcOffset ? `• ${utcOffset}` : ''}
      </span>
    </div>
  );
}

export default function TimeZoneClock() {
  const [selectedTz, setSelectedTz] = useState(worldTimeZones[0].tz);
  const [currentTime, setCurrentTime] = useState(getTimeInZone(selectedTz));

  console.log('TmeZone', worldTimeZones);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getTimeInZone(selectedTz));
    }, 1000);
    return () => clearInterval(interval);
  }, [selectedTz]);

  const zone = worldTimeZones.find((z) => z.tz === selectedTz);

  // Calculate UTC offset on the client only
  const utcOffset = useMemo(() => {
    if (!zone) return '';
    try {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: zone.tz,
        timeZoneName: 'shortOffset',
      });
      const parts = formatter.formatToParts(now);
      const offsetPart =
        parts.find((p) => p.type === 'timeZoneName')?.value || 'UTC';
      return offsetPart.replace('UTC', '') || '+00:00';
    } catch {
      return '';
    }
  }, [zone]);

  return (
    <div className="flex flex-col gap-6 items-center w-full max-w-2xl">
      <ClockDisplay time={currentTime} />
      <TimeZoneInfo
        city={zone?.city || 'Unknown'}
        country={zone?.country || 'Unknown'}
        tz={zone?.tz || 'Unknown'}
        utcOffset={utcOffset}
      />
      <TimeZoneSelector selectedTz={selectedTz} onChange={setSelectedTz} />
    </div>
  );
}
