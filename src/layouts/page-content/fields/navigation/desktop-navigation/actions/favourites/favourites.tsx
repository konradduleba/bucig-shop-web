import { FC } from 'react';
import { AnimatePresence, useCycle } from 'framer-motion';

import SvgHeart from '@icons/heart';

import IconHover from '@components/icon-hover/icon-hover';
import IconButton from '@components/buttons/icon-button/icon-button';
import Card from '@components/card/card';
import Overlay from '@components/overlay/overlay';

import { FavouritesAnimation } from './favourites-animation/favourites-animation';
import { FavouritesList } from './favourites-list/favourites-list';

import styles from './favourites.module.scss';
import commonStyles from '../actions.module.scss';

export const Favourites: FC = () => {
  const [isVisible, toggleVisibility] = useCycle(false, true);

  return (
    <div className={styles.container}>
      <IconHover onClick={() => toggleVisibility()}>
        <IconButton
          renderIcon={() => <SvgHeart />}
          className={commonStyles.icon}
          aria-label="favourites"
        />
      </IconHover>
      <AnimatePresence>
        {isVisible && (
          <>
            <FavouritesAnimation>
              <Card>
                <FavouritesList />
              </Card>
            </FavouritesAnimation>
            <Overlay
              onClickOverlay={() => toggleVisibility()}
              hasDisabledScroll={false}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
