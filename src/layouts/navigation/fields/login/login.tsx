import { FC } from 'react';

import SvgUser from '@icons/user';

import IconHover from '@components/icon-hover/icon-hover';
import IconButton from '@components/buttons/icon-button/icon-button';
import CustomLink from '@components/custom-link/custom-link';

import { ROUTES } from '@utils';

import styles from './login.module.scss';

export const Login: FC = () => {
  return (
    <CustomLink href={ROUTES.LOGIN()}>
      <IconHover>
        <IconButton renderIcon={() => <SvgUser />} className={styles.icon} />
      </IconHover>
    </CustomLink>
  );
};
