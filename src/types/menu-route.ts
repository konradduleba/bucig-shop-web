import { LinkProps } from 'next/link';

export interface MenuRoute {
  href: LinkProps['href'];
  name: string;
}
