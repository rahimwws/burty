import dayjs from 'dayjs';

const isTimeOver = ({ startDate, endTime }: { startDate: string; endTime: string }): boolean => {
   const startDateOnly = startDate.split('T')[0];
   const endDateTime = dayjs(`${startDateOnly}T${endTime}`, "YYYY-MM-DDTHH:mm");

   const now = dayjs();
   return now.isAfter(endDateTime);
};

export default isTimeOver;