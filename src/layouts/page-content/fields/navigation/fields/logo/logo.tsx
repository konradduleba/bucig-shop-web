import { FC } from 'react';
import Image from 'next/image';

import { useInitialStateProvider } from '@providers';

import styles from './logo.module.scss';

const LOGO_ICON_SIZE = 36;

interface LogoProps {
  logoSize?: number;
}

export const Logo: FC<LogoProps> = ({ logoSize = LOGO_ICON_SIZE }) => {
  const { general } = useInitialStateProvider();
  const { url } = general.logo;

  return (
    <div className={styles.container}>
      <Image alt="logo" src={url} width={logoSize} height={logoSize} priority />
    </div>
  );
};
