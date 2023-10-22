'use client';

import { FC } from 'react';

import styles from './language-changer.module.scss';
import { Button } from '@components/buttons';
import {
  AVAILABLE_LANGUAGES,
  AvailableLanguage,
  Languages,
} from './language-changer.consts';
import Typography from '@components/typography';

export const LanguageChanger: FC = () => {
  const onChangeLanguage = (key: Languages) => {
    // @TODO Update when i18n will be implemented
    console.log('lang', key);
  };

  return (
    <div className={styles.container}>
      {AVAILABLE_LANGUAGES.map(({ key, value }: AvailableLanguage) => (
        <Button
          key={key}
          className={styles.button}
          onClick={() => onChangeLanguage(key)}
        >
          <Typography.Text size="14" className={styles.text}>
            {value}
          </Typography.Text>
        </Button>
      ))}
    </div>
  );
};
