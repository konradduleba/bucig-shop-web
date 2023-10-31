import { FC } from 'react';
import CustomLink from '@components/custom-link/custom-link';

import { CONTACT_INFO_ELEMENTS } from './contact.consts';
import { ContactContent } from './contact.types';

import { InfoSection } from './info-section/info-section';

import styles from './contact.module.scss';

export const MenuContacts: FC = () => {
  return (
    <div className={styles.container}>
      {CONTACT_INFO_ELEMENTS.map(
        ({ href, id, children, external }: ContactContent) => (
          <CustomLink href={href} key={id} external={external}>
            <InfoSection>{children}</InfoSection>
          </CustomLink>
        ),
      )}
    </div>
  );
};
