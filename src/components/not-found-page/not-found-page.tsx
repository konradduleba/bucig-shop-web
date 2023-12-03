'use client';
import Typography from '@components/typography';
import { useI18nContext } from '@i18n';

import styles from './not-found-page.module.scss';
import ActionButton from '@components/buttons/action-button/action-button';

const NotFoundPage = () => {
  const { LL } = useI18nContext();

  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default NotFoundPage;
