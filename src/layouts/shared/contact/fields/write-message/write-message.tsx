import { FC } from 'react';
import { useI18nContext } from '@i18n';

import { ActionButton } from '@components/buttons';

export const WriteMessage: FC = () => {
  const { LL } = useI18nContext();

  return <ActionButton>{LL.COMMON.WRITE_A_MESSAGE()}</ActionButton>;
};
