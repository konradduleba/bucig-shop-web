import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

import styles from './custom-image.module.scss';

type CustomImageProps = Pick<ImageProps, 'alt' | 'src'>;

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
