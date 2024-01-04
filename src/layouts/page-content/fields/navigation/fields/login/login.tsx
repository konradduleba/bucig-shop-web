import { FC } from 'react';

import { useI18nContext } from '@i18n';

import SvgUser from '@icons/user';

import IconHover from '@components/icon-hover/icon-hover';
import { IconButton } from '@components/buttons/icon-button/icon-button';
import CustomLink from '@components/custom-link/custom-link';

import { ROUTES } from '@utils';

import styles from './login.module.scss';

export const Login: FC = () => {
  const { LL } = useI18nContext();

  return (
    <CustomLink href={ROUTES.LOGIN()} aria-label={LL.SEO.LOGIN_ARIA_LABEL()}>
      <IconHover>
        <IconButton
          renderIcon={() => <SvgUser />}
          className={styles.icon}
          aria-label="login"
        />
      </IconHover>
    </CustomLink>
  );
};
