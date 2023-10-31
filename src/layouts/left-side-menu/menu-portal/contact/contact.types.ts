import { ReactNode } from 'react';
import { LinkProps } from 'next/link';
import { CustomLinkProps } from '@components/custom-link/custom-link';

export enum ContactIds {
  MAIL = 'mail',
  PHONE = 'phone',
  LOCALIZATION = 'localization',
  HOURS = 'hours',
  MESSAGE = 'message',
}

export type ContactContent = CustomLinkProps & {
  id: ContactIds;
  href: LinkProps['href'];
  children: ReactNode;
};
