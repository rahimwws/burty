export const formatDate = (dateString: Date): string => {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};

export const formatDateSheet = (dateString: string | Date) => {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return formatter.format(date);
};
