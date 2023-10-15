import { FC, PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';

import '../theme/_theme.scss';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
