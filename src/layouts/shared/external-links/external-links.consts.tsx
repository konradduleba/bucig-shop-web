import SvgMoon from '@icons/moon';
import SvgSun from '@icons/sun';
import { MouseEventHandler } from 'react';

export interface ExternalLinkList {
  id: ExternalLinksTypes;
  icon: JSX.Element;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export enum ExternalLinksTypes {
  MOON = 'moon',
  SUN = 'sun',
}

export const EXTERNAL_LINK_LIST: ExternalLinkList[] = [
  {
    id: ExternalLinksTypes.MOON,
    icon: <SvgMoon />,
    onClick: () => console.log(ExternalLinksTypes.MOON),
  },
  {
    id: ExternalLinksTypes.SUN,
    icon: <SvgSun />,
    onClick: () => console.log(ExternalLinksTypes.SUN),
  },
];
