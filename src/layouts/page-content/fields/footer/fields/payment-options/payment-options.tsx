import { FC, Fragment } from 'react';

import { PAYMENT_ICONS, PaymentIcon } from './payment-options.consts';

import styles from './payment-options.module.scss';

export const PaymentOptions: FC = () => {
  return (
    <div className={styles.container}>
      {PAYMENT_ICONS.map(({ icon, id }: PaymentIcon) => (
        <Fragment key={id}>{icon}</Fragment>
      ))}
    </div>
  );
};
