const EVENT_YEAR = 2025;

const MONTH_INDEX: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

const parseDate = (date: string): Date | null => {
  if (!date) {
    return null;
  }

  const isoMatch = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) {
    const [_, year, month, day] = isoMatch;
    return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
  }

  const [rawDay, rawMonth] = date.split("-");
  if (!rawDay || !rawMonth) {
    return null;
  }

  const dayNumber = Number(rawDay);
  const monthKey = rawMonth.slice(0, 3).toLowerCase();
  const monthIndex = MONTH_INDEX[monthKey];

  if (!Number.isFinite(dayNumber) || monthIndex === undefined) {
    return null;
  }

  return new Date(Date.UTC(EVENT_YEAR, monthIndex, dayNumber));
};

const formatWithIntl = (
  date: Date | null,
  options: Intl.DateTimeFormatOptions
): string => {
  if (!date) {
    return "";
  }
  const formatted = new Intl.DateTimeFormat("fr-FR", options).format(date);
  return formatted;
};

export const formatDate = (date: string): string => {
  const formatted = formatWithIntl(parseDate(date), {
    day: "numeric",
    month: "long",
  });
  return formatted || date;
};

export const getDayOfWeek = (date: string): string => {
  const formatted =
    formatWithIntl(parseDate(date), { weekday: "long" }) || date;
  if (!formatted) {
    return "";
  }
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};
