import { General } from '@types';

const formatHours = (date: string) => {
  return Number(date);
};

const formatMinutes = (date: string) => {
  const fullHour = date === '00';

  return {
    fullHour,
    minute: fullHour ? '' : date,
  };
};

export const toDateWithOutTimeZone = (date: string) => {
  const tempTime = date.split(':');
  const hour = formatHours(tempTime[0]);
  const { fullHour, minute } = formatMinutes(tempTime[1]);

  return `${hour}${fullHour ? '' : `:${minute}`}`;
};
export const getOpenHourDays = (openHours: General['openHours']) => {
  return openHours
    .map(({ day, from, to }) => {
      const dateFrom = toDateWithOutTimeZone(from);
      const dateTo = toDateWithOutTimeZone(to);

      return `${day}: ${dateFrom} - ${dateTo}`;
    })
    .join(', ');
};
