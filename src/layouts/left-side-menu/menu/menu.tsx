'use client';

import { FC, useState } from 'react';
import IconSwapper from '@components/icon-swapper/icon-swapper';
import SvgClose from '@icons/close';
import IconButton from '@components/buttons/icon-button/icon-button';

import styles from './menu.module.scss';
import SvgMenuAlt from '@icons/menu-alt';

const MENU_ICON_SIZE = 50;

export const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <IconButton
      renderIcon={() => (
        <IconSwapper
          displayFirst={isOpen}
          icon1={<SvgClose fontSize={MENU_ICON_SIZE} />}
          icon2={<SvgMenuAlt fontSize={MENU_ICON_SIZE} />}
        />
      )}
      onClick={onToggleMenu}
      className={styles.menu}
    />
  );
};
