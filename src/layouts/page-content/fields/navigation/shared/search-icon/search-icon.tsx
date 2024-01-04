import { FC } from 'react';

import IconHover from '@components/icon-hover/icon-hover';
import { IconButton } from '@components/buttons';
import IconSwapper from '@components/icon-swapper/icon-swapper';

import SvgSearch from '@icons/search';
import SvgCloseBold from '@icons/close-bold';

import styles from './search-icon.module.scss';

interface SearchIconProps {
  toggleVisibility: () => void;
  isVisible: boolean;
}

export const SearchIcon: FC<SearchIconProps> = ({
  isVisible,
  toggleVisibility,
}) => {
  return (
    <IconHover onClick={toggleVisibility}>
      <IconButton
        renderIcon={() => (
          <IconSwapper
            displayFirst={isVisible}
            icon1={<SvgCloseBold />}
            icon2={<SvgSearch />}
          />
        )}
        className={styles.icon}
        aria-label="search"
      />
    </IconHover>
  );
};
