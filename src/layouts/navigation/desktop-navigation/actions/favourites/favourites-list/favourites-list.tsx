import { FC } from 'react';

import Typography from '@components/typography';

import styles from './favourites-list.module.scss';

export const FavouritesList: FC = () => {
  return (
    <div className={styles.container}>
      <Typography.Heading size="24" className={styles.heading}>
        Your wish list is empty
      </Typography.Heading>
      <Typography.Text size="18">Fill your goods</Typography.Text>
    </div>
  );
};
