import { Link } from '@types';

type FooterLink = Pick<Link, 'id' | 'href' | 'title' | 'isExternal'>;

export interface Footer {
  links: FooterLink[];
}
