import { FC } from 'react';
import { AnimatePresence } from 'framer-motion';

import Overlay from '@components/overlay/overlay';
import { useVisibleToggle } from '@hooks';

import { Basket, Logo } from '../fields';

import { SearchBarAnimation } from './search-bar-animation/search-bar-animation';

import { Actions } from './actions/actions';
import { SearchBar } from './search-bar/search-bar';
import { Menu } from './menu/menu';

import styles from './mobile-navigation.module.scss';

const LOGO_ICON_SIZE = 30;

export const MobileNavigation: FC = () => {
  const { isVisible, toggleVisibility, hideVisibility } = useVisibleToggle();

  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.left}>
          <Menu />
          <Logo logoSize={LOGO_ICON_SIZE} />
        </div>
        <div className={styles.right}>
          <Actions toggleVisibility={toggleVisibility} isVisible={isVisible} />
          <Basket />
        </div>
      </nav>
      <AnimatePresence>
        {isVisible && (
          <>
            <SearchBarAnimation>
              <SearchBar />
            </SearchBarAnimation>
            <Overlay
              onClickOverlay={hideVisibility}
              hasDisabledScroll={false}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};
