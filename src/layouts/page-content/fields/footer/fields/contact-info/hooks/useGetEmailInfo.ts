import { useInitialStateProvider } from '@providers';

import { ContactInfoTypes } from '../types';
import { getOpenMailApplicationHref } from '@utils';
import { useI18nContext } from '@i18n';

export const useGetEmailInfo = () => {
  const {
    general: { email },
  } = useInitialStateProvider();
  const { LL } = useI18nContext();

  const emailInfo = {
    id: ContactInfoTypes.EMAIL,
    href: getOpenMailApplicationHref(email),
    value: email,
    isExternal: true,
    title: LL.COMMON.EMAIL(),
  };

  return emailInfo;
};
