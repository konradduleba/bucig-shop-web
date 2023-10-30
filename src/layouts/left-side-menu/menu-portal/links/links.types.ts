import { LinkProps } from 'next/link';

export enum LinkIds {
  CONFIGURATOR = 'configurator',
  JOIN_US = 'join-us',
  FALLBACK = 'fallback',
}

export interface MenuLink {
  id: LinkIds;
  href: LinkProps['href'];
  imageRef: string;
  label: string;
}

export type ActivePhotoKey = LinkIds | null;

export type ActivePhoto = Pick<MenuLink, 'imageRef' | 'label' | 'id'>;

export interface ActivePhotoHook {
  activePhoto: ActivePhoto;
  onUpdateActivePhoto: (key: LinkIds) => void;
}
