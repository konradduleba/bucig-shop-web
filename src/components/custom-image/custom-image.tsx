import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

import { Link } from '@types';

import styles from './custom-image.module.scss';

type CustomImageProps = Pick<ImageProps, 'alt'> & {
  src: Link['href'];
};

const sizes: ImageProps['sizes'] = '100%';

const CustomImage: FC<CustomImageProps> = ({ alt, src }) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={100}
      className={styles.image}
    />
  );
};

export default CustomImage;
