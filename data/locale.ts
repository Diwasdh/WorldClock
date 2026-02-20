export interface WorldTimeZone {
  label: string;
  tz: string;
  city: string;
  country: string;
}

export const worldTimeZones: WorldTimeZone[] = Intl.supportedValuesOf(
  'timeZone'
)
  .sort()
  .map((tz) => {
    const parts = tz.split('/');
    const city = parts[parts.length - 1].replace(/_/g, ' ');
    const country = parts.length > 1 ? parts[0] : 'Unknown';
    return {
      label: `${city}, ${country}`,
      tz,
      city,
      country,
    };
  });
