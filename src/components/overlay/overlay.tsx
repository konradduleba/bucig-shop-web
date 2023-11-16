import type { PropsWithChildren } from 'react';

import useOverlay, { OVERLAY_ID } from './useOverlay';

import styles from './overlay.module.scss';

export type OverlayProps = PropsWithChildren<{
  onClickOverlay?: () => unknown;
  hasDisabledScroll?: boolean;
}>;

export function Overlay({
  children,
  hasDisabledScroll = true,
  onClickOverlay,
}: OverlayProps) {
  useOverlay({ hasDisabledScroll, onClickOverlay });

  return (
    <div id={OVERLAY_ID} className={styles.overlay}>
      {children}
    </div>
  );
}

export default Overlay;
