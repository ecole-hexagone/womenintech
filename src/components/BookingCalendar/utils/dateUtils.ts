export const formatDate = (date: string): string => {
  const [day] = date.split("-");
  return `${day} Novembre 2025`;
};

export const getDayOfWeek = (date: string): string => {
  const [day] = date.split("-");
  const dateObj = new Date(`2025-11-${day}`);
  const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  return days[dateObj.getDay()];
};
