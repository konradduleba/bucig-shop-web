import { FC } from 'react';
import SvgMail from '@icons/mail';

import { OneLineContent } from '../content/one-line';
import { ICON_FONT_SIZE } from '../contact.consts';

export const Mail: FC = () => {
  return (
    <OneLineContent
      icon={<SvgMail fontSize={ICON_FONT_SIZE} />}
      line="kon.duleba@gmail.com"
    />
  );
};
