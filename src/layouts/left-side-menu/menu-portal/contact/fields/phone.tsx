import { FC } from 'react';
import SvgPhoneCall from '@icons/phone-call';

import { OneLineContent } from '../content/one-line';
import { ICON_FONT_SIZE } from '../contact.consts';

export const Phone: FC = () => {
  return (
    <OneLineContent
      icon={<SvgPhoneCall fontSize={ICON_FONT_SIZE} />}
      line="+48 123 456 789"
    />
  );
};
