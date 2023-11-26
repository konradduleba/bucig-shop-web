import { FC } from 'react';

import { CONTACT_DATA } from '@constants';

import SvgPhoneCall from '@icons/phone-call';

import { OneLineContent } from '../content/one-line';
import { ICON_FONT_SIZE } from '../contact.consts';

export const Phone: FC = () => {
  return (
    <OneLineContent
      icon={<SvgPhoneCall fontSize={ICON_FONT_SIZE} />}
      line={CONTACT_DATA.phone.value}
    />
  );
};
