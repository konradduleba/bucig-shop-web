import { ROUTES } from '@utils';
import { CONTACT_DATA } from '@constants';

import { ContactContent, ContactIds } from './contact.types';

import { Hours, Localization, Mail, Phone, WriteMessage } from './fields';

export const ICON_FONT_SIZE: number = 34;

export const CONTACT_INFO_ELEMENTS: ContactContent[] = [
  {
    id: ContactIds.MAIL,
    href: CONTACT_DATA.email.href,
    external: true,
    children: <Mail />,
  },
  {
    id: ContactIds.PHONE,
    href: CONTACT_DATA.phone.href,
    external: true,
    children: <Phone />,
  },
  {
    id: ContactIds.HOURS,
    href: CONTACT_DATA.hours.href,
    external: true,
    children: <Hours />,
  },
  {
    id: ContactIds.LOCALIZATION,
    href: CONTACT_DATA.address.href,
    external: true,
    children: <Localization />,
  },
  {
    id: ContactIds.MESSAGE,
    href: ROUTES.MESSAGE_US(),
    children: <WriteMessage />,
  },
];
