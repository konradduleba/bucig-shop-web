import { Metadata } from 'next';
import { Image } from '@types';
import { DataAttributes } from '@api';

interface LoginAttributes<ImageType> {
  seo: Metadata;
  backgroundImage: ImageType;
}

export type Login = Omit<LoginAttributes<Image>, 'seo'>;

export type LoginAPIResponse = LoginAttributes<DataAttributes<Image>>;
