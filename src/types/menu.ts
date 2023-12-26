import { Image } from '@types';

import { DataAttributes } from '@api';

export interface Link {
  id: string;
  href: string;
  title: string;
  isExternal: boolean;
  isVisible: boolean;
}

type MenuLinkType<ImageType> = Link & {
  image: ImageType;
};

export type MenuLink = MenuLinkType<Image>;

export interface Menu {
  links: MenuLinkType<Image>[];
}

export interface MenuAPIResponse {
  links: MenuLinkType<DataAttributes<Image>>[];
}
