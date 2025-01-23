import dayjs from "dayjs";

const getTimeOnly = (date: string, format?: string) => {
   if (typeof date == 'string')
      return dayjs(date.split("T")[1]).format(format);
   return date;
}

export default getTimeOnly;