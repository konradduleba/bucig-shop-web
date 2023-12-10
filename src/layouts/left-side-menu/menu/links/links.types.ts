import { LinkIds, MenuLink } from '@types';

export type ActivePhotoKey = LinkIds | null;

export type ActivePhoto = Pick<MenuLink, 'imageRef' | 'label' | 'id'>;

export interface ActivePhotoHook {
  activePhoto: ActivePhoto;
  onUpdateActivePhoto: (key: LinkIds) => void;
}
