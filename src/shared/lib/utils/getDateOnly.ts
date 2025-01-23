import dayjs from "dayjs";

const getDateOnly = (date: string, format?: string) => {
   if (typeof date == 'string')
      return dayjs(date.split("T")[0]).format(format);
   return date;
}

export default getDateOnly;