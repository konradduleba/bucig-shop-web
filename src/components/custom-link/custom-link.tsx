import Link from 'next/link';
import { ComponentProps, FC, PropsWithChildren } from 'react';
import { useI18nContext } from '@i18n';

export interface CustomLinkProps {
  external?: boolean;
  className?: string;
}

export type LinkProps = ComponentProps<typeof Link>;

const CustomLink: FC<PropsWithChildren<CustomLinkProps & LinkProps>> = ({
  children,
  external,
  className,
  ...linkProps
}) => {
  const { LL } = useI18nContext();
  const { href } = linkProps;

  if (external) {
    return (
      <Link
        {...linkProps}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link {...linkProps} href={LL.MENU.LINK(href)} className={className}>
      {children}
    </Link>
  );
};

export default CustomLink;
