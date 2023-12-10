'use client';

import { PageWrapper, Section } from '@layouts';

import Typography from '@components/typography';
import ActionButton from '@components/buttons/action-button/action-button';

import { useI18nContext } from '@i18n';

import styles from './not-found.module.scss';

const NotFound = () => {
  const { LL } = useI18nContext();

  return (
    <PageWrapper center>
      <Section className={styles.container}>
        <div className={styles.content}>
          <Typography.Heading size="108">404</Typography.Heading>
          <div className={styles.rightSection}>
            <Typography.Heading size="54">
              {LL.ERROR.NOT_FOUND_TITLE()}
            </Typography.Heading>
            <Typography.Text size="20">
              {LL.ERROR.NOT_FOUND_DESCRIPTION()}
            </Typography.Text>
          </div>
        </div>
        <ActionButton className={styles.homeButton}>
          {LL.ERROR.NOT_FOUND_BUTTON()}
        </ActionButton>
      </Section>
    </PageWrapper>
  );
};

export default NotFound;