import { FC } from 'react';
import { useI18nContext } from '@i18n';

import SvgClock from '@icons/clock';

import { CONTACT_DATA } from '@constants';

import { TwoLinesContent } from '../content/two-lines';
import { ICON_FONT_SIZE } from '../contact.consts';

export const Hours: FC = () => {
  const { LL } = useI18nContext();

  return (
    <TwoLinesContent
      icon={<SvgClock fontSize={ICON_FONT_SIZE} />}
      firstLine={`${LL.HOURS.MON_FRI()}: ${CONTACT_DATA.hours.mon_fri}`}
      secondLine={`${LL.HOURS.SAT()}: ${CONTACT_DATA.hours.sat}`}
    />
  );
};
