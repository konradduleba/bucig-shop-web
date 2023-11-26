'use client';
import cn from 'classnames';
import styles from './not-found-page.module.scss';
import Typography from '@components/typography';
import { useI18nContext } from '../../i18n/i18n-react';
import { Button } from '@components/buttons';
import IconButton from '@components/buttons/icon-button/icon-button';

const NotFoundPage = () => {
  const { LL } = useI18nContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Typography.Heading size="108">404</Typography.Heading>
        <div className={styles.divider} />
        <div className={styles.rightSection}>
          <Typography.Heading size="54">
            {LL.ERROR.NOT_FOUND_TITLE()}
          </Typography.Heading>
          <Typography.Text size="20">
            {LL.ERROR.NOT_FOUND_DESCRIPTION()}
          </Typography.Text>
          <Button>hello</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
