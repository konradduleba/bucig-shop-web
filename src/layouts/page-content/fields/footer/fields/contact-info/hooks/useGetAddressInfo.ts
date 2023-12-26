import { useInitialStateProvider } from '@providers';

import { useI18nContext } from '@i18n';

import { getAddress } from '@utils';

import { ContactInfoTypes } from '../types';

export const useGetAddressInfo = () => {
  const {
    general: { localization },
  } = useInitialStateProvider();
  const { href } = localization;
  const { LL } = useI18nContext();

  const addressInfo = {
    id: ContactInfoTypes.ADDRESS,
    href,
    value: getAddress(localization),
    isExternal: true,
    title: LL.COMMON.ADDRESS(),
  };

  return addressInfo;
};
