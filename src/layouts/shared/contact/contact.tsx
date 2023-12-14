import { FC } from 'react';
import CustomLink, { LinkProps } from '@components/custom-link/custom-link';

import {
  CONTACT_INFO_MOBILE_ELEMENTS,
  CONTACT_INFO_DESKTOP_ELEMENTS,
} from './contact.consts';
import { ContactContent } from './contact.types';

import { InfoSection } from './info-section/info-section';

import styles from './contact.module.scss';

type ClickLink = Pick<LinkProps, 'onClick'>;

type LinkListProps = ClickLink & {
  list: ContactContent[];
};

const LinkList: FC<LinkListProps> = ({ list, onClick }) => {
  return (
    <div className={styles.container}>
      {list.map(({ href, id, children, external }: ContactContent) => (
        <CustomLink href={href} key={id} external={external} onClick={onClick}>
          <InfoSection>{children}</InfoSection>
        </CustomLink>
      ))}
    </div>
  );
};

export const MenuContactsMobile: FC<ClickLink> = (props) => {
  return <LinkList list={CONTACT_INFO_MOBILE_ELEMENTS} {...props} />;
};

export const MenuContactsDesktop: FC<ClickLink> = (props) => {
  return <LinkList list={CONTACT_INFO_DESKTOP_ELEMENTS} {...props} />;
};
