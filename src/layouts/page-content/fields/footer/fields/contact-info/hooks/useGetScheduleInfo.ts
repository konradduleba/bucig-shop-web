import { useInitialStateProvider } from '@providers';

import { getOpenHourDays } from '@utils';

import { useI18nContext } from '@i18n';

import { ContactInfoTypes } from '../types';

export const useGetScheduleInfo = () => {
  const {
    general: { openHours },
  } = useInitialStateProvider();
  const { LL } = useI18nContext();

  const scheduleInfo = {
    id: ContactInfoTypes.SCHEDULE,
    isExternal: false,
    value: getOpenHourDays(openHours),
    title: LL.COMMON.OPEN_HOURS(),
  };

  return scheduleInfo;
};
