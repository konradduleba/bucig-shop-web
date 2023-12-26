import { LinkProps } from '@components/custom-link/custom-link';

export const getOpenMailApplicationHref = (
  mail: LinkProps['href'],
): LinkProps['href'] => {
  return `mailto:${mail}`;
};
