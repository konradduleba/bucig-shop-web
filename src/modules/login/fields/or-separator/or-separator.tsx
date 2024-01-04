import { FC } from 'react';
import { useI18nContext } from '@i18n';

import { TextDivider } from '@components/separators';

export const OrSeparator: FC = () => {
  const { LL } = useI18nContext();

  return <TextDivider text={LL.LOGIN.OR()} />;
};
