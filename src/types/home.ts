import { Metadata } from 'next';

export interface Home {
  seo: Metadata;
  title: string;
}

export type HomeData = Omit<Home, 'seo'>;
