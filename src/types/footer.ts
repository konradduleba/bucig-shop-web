import { LinkProps } from '@components/custom-link/custom-link';

type ContactItem = Pick<LinkProps, 'id' | 'href' | 'title'> & {
  value: string;
  isExternal: boolean;
};

type Contact = ContactItem[];

type MenuLink = Pick<LinkProps, 'id' | 'href' | 'title'> & {
  isExternal: boolean;
};

type Menu = MenuLink[];

export interface Footer {
  contact: Contact;
  menu: Menu;
}
