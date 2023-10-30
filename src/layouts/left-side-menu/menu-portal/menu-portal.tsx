import { FC } from 'react';
import Portal from '@components/portal/portal';

import { AnimatePresence } from 'framer-motion';

import { MenuContacts } from './contact/contact';
import { MenuLinks } from './links/links';
import { MenuPortalAnimation } from './portal-animation/portal-animation';

interface MenuPortal {
  isOpen: boolean;
}

export const MenuPortal: FC<MenuPortal> = ({ isOpen }) => {
  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <MenuPortalAnimation>
            <MenuLinks />
            <MenuContacts />
          </MenuPortalAnimation>
        )}
      </AnimatePresence>
    </Portal>
  );
};
