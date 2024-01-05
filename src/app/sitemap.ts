import { MetadataRoute } from 'next';

import { ROUTES } from '../utils/routes';

const CURRENTLY_AVAILABLE_SLUGS = [
  ROUTES.HOME(),
  ROUTES.ABOUT_US(),
  ROUTES.CONFIGURATOR(),
  ROUTES.FAVOURITES(),
  ROUTES.JOIN_US(),
  ROUTES.LOGIN(),
  ROUTES.MESSAGE_US(),
  ROUTES.NEWS(),
  ROUTES.PRIVACY_POLICY(),
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return CURRENTLY_AVAILABLE_SLUGS.map((slug: string) => ({
    url: `${process.env.NEXT_PUBLIC_HOST_URL}${slug}`,
    lastModified: new Date(),
  }));
}
