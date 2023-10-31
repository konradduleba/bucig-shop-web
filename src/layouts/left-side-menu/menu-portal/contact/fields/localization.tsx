import { FC } from 'react';
import SvgHome from '@icons/home';

import { TwoLinesContent } from '../content/two-lines';
import { ICON_FONT_SIZE } from '../contact.consts';

export const Localization: FC = () => {
  return (
    <TwoLinesContent
      icon={<SvgHome fontSize={ICON_FONT_SIZE} />}
      firstLine="21/37 ul. Optyczna"
      secondLine="33-400 Bochnia"
    />
  );
};
