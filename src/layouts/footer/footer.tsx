import { FC } from 'react';

import { PageWrapper, Section } from '@layouts';

import {
  SubMenu,
  ContactInfo,
  Copyrights,
  PaymentOptions,
  Author,
} from './fields';

import styles from './footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer>
      <PageWrapper className={styles.footer}>
        <Section className={styles.contactInfo}>
          <SubMenu />
          <ContactInfo />
        </Section>
        <Section className={styles.authors}>
          <Copyrights />
          <PaymentOptions />
          <Author />
        </Section>
      </PageWrapper>
    </footer>
  );
};
