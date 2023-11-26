import { FC } from 'react';

import SvgHome from '@icons/home';

import { CONTACT_DATA } from '@constants';

import { TwoLinesContent } from '../content/two-lines';
import { ICON_FONT_SIZE } from '../contact.consts';

export const Localization: FC = () => {
  return (
    <TwoLinesContent
      icon={<SvgHome fontSize={ICON_FONT_SIZE} />}
      firstLine={CONTACT_DATA.address.localication}
      secondLine={CONTACT_DATA.address.post_code}
    />
  );
};
