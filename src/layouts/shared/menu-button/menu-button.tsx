import { FC } from 'react';

import IconButton from '@components/buttons/icon-button/icon-button';
import IconSwapper from '@components/icon-swapper/icon-swapper';

import SvgClose from '@icons/close';
import SvgMenuAlt from '@icons/menu-alt';

import styles from './menu-button.module.scss';

interface MenuButtonProps {
  isVisible: boolean;
  iconSize: number;
  toggleVisibility: () => void;
}

export const MenuButton: FC<MenuButtonProps> = ({
  iconSize,
  isVisible,
  toggleVisibility,
}) => {
  return (
    <IconButton
      renderIcon={() => (
        <IconSwapper
          displayFirst={isVisible}
          icon1={<SvgClose fontSize={iconSize} />}
          icon2={<SvgMenuAlt fontSize={iconSize} />}
        />
      )}
      onClick={toggleVisibility}
      className={styles.menu}
      aria-label="menu"
    />
  );
};
