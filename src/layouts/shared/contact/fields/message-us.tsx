import { FC } from 'react';

import SvgChat from '@icons/chat';

import { useI18nContext } from '@i18n';

import { OneLineContent } from '../content/one-line';
import { ICON_FONT_SIZE } from '../contact.consts';

export const MessageUs: FC = () => {
  const { LL } = useI18nContext();

  return (
    <OneLineContent
      icon={<SvgChat fontSize={ICON_FONT_SIZE} />}
      line={LL.COMMON.WRITE_A_MESSAGE()}
    />
  );
};
