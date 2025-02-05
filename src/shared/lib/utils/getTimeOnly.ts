const getTimeOnly = (date: string, format?: string) => {
   if (typeof date == 'string')
      return date.split("T")[1].slice(0, 5);
   return date;
}

export default getTimeOnly;