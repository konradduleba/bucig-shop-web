import { FC } from 'react';

import SvgHeart from '@icons/heart';

import IconHover from '@components/icon-hover/icon-hover';
import IconButton from '@components/buttons/icon-button/icon-button';
import CustomLink from '@components/custom-link/custom-link';

import { ROUTES } from '@utils';

import styles from './favourites.module.scss';

export const Favourites: FC = () => {
  return (
    <CustomLink href={ROUTES.FAVOURITES()}>
      <IconHover>
        <IconButton renderIcon={() => <SvgHeart />} className={styles.icon} />
      </IconHover>
    </CustomLink>
  );
};
