'use client';

import { FC } from 'react';
import { AnimatePresence } from 'framer-motion';

import Portal from '@components/portal/portal';
import { Divider } from '@components/separators';

import { useDisableBodyScroll, useVisibleToggle } from '@hooks';

import { MenuPortalAnimation } from './portal-animation/portal-animation';

import { MenuButton, MenuContactsMobile } from '../../../../../shared';
import { LangAndLinks } from './lang-and-links/lang-and-links';

import { Links } from './links/links';

import styles from './menu.module.scss';

const MENU_ICON_SIZE = 40;

export const Menu: FC = () => {
  const { isVisible, toggleVisibility } = useVisibleToggle();
  useDisableBodyScroll({ isDisable: isVisible });

  return (
    <>
      <MenuButton
        iconSize={MENU_ICON_SIZE}
        isVisible={isVisible}
        toggleVisibility={toggleVisibility}
      />
      <Portal>
        <AnimatePresence>
          {isVisible && (
            <MenuPortalAnimation>
              <div className={styles.content}>
                <Links onClick={toggleVisibility} />
                <Divider />
                <MenuContactsMobile onClick={toggleVisibility} />
              </div>
              <LangAndLinks />
            </MenuPortalAnimation>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
};
