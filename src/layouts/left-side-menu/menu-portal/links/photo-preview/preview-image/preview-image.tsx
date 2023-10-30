import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

import styles from './preview-image.module.scss';

type PreviewImageProps = Pick<ImageProps, 'alt' | 'src'>;

const sizes: ImageProps['sizes'] = '100%';

export const PreviewImage: FC<PreviewImageProps> = ({ alt, src }) => {
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
