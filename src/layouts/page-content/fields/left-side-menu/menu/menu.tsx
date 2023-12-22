'use client';

import { FC } from 'react';
import { AnimatePresence } from 'framer-motion';

import Portal from '@components/portal/portal';

import { MenuPortalAnimation } from './portal-animation/portal-animation';
import { MenuLinks } from './links/links';

import { MenuContactsDesktop } from '../../../../shared';

import { useVisibleToggle } from '@hooks';

import { MenuButton } from '../../../../shared';

const MENU_ICON_SIZE = 50;

export const Menu: FC = () => {
  const { isVisible, toggleVisibility } = useVisibleToggle();

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
              <MenuLinks onClick={toggleVisibility} />
              <MenuContactsDesktop onClick={toggleVisibility} />
            </MenuPortalAnimation>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
};
