import { LinkProps } from '@components/custom-link/custom-link';

export enum ContactInfoTypes {
  EMAIL = 'email',
  ADDRESS = 'address',
  SCHEDULE = 'schedule',
}

export type ContactInfo = Pick<LinkProps, 'id' | 'title'> & {
  href?: LinkProps['href'];
  isExternal: boolean;
  value: string;
};
