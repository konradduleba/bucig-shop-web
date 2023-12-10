import { FC } from 'react';
import CustomLink from '@components/custom-link/custom-link';

import {
  CONTACT_INFO_MOBILE_ELEMENTS,
  CONTACT_INFO_DESKTOP_ELEMENTS,
} from './contact.consts';
import { ContactContent } from './contact.types';

import { InfoSection } from './info-section/info-section';

import styles from './contact.module.scss';

interface LinkListProps {
  list: ContactContent[];
}

const LinkList: FC<LinkListProps> = ({ list }) => {
  return (
    <div className={styles.container}>
      {list.map(({ href, id, children, external }: ContactContent) => (
        <CustomLink href={href} key={id} external={external}>
          <InfoSection>{children}</InfoSection>
        </CustomLink>
      ))}
    </div>
  );
};

export const MenuContactsMobile: FC = () => {
  return <LinkList list={CONTACT_INFO_MOBILE_ELEMENTS} />;
};

export const MenuContactsDesktop: FC = () => {
  return <LinkList list={CONTACT_INFO_DESKTOP_ELEMENTS} />;
};
