'use client';

import { FC } from 'react';
import cn from 'classnames';

import { Button } from '@components/buttons';
import Typography from '@components/typography';

import { useHandlePageLanguage } from '@hooks';

import {
  AVAILABLE_LANGUAGES,
  AvailableLanguage,
} from './language-changer.consts';

import styles from './language-changer.module.scss';

export const LanguageChanger: FC = () => {
  const { selectedLocale, onChangeLanguage } = useHandlePageLanguage();

  return (
    <div className={styles.container}>
      {AVAILABLE_LANGUAGES.map(({ key, value }: AvailableLanguage) => (
        <Button
          key={key}
          className={styles.button}
          onClick={() => onChangeLanguage(key)}
        >
          <Typography.Text
            size="14"
            className={cn(styles.text, {
              [styles.active]: selectedLocale === key,
            })}
          >
            {value}
          </Typography.Text>
        </Button>
      ))}
    </div>
  );
};
