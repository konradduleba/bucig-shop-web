import { FC } from 'react';
import SvgClock from '@icons/clock';
import { useI18nContext } from '@i18n';

import { TwoLinesContent } from '../content/two-lines';
import { ICON_FONT_SIZE } from '../contact.consts';

export const Hours: FC = () => {
  const { LL } = useI18nContext();

  return (
    <TwoLinesContent
      icon={<SvgClock fontSize={ICON_FONT_SIZE} />}
      firstLine={`${LL.HOURS.MON_FRI()}: 9 - 17`}
      secondLine={`${LL.HOURS.SAT()}: 9 - 13`}
    />
  );
};
