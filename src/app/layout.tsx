import { FC, PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import { Footer, MainContent, Navigation } from '@layouts';
import { ThemeProvider } from '@providers';

import '@styles/global.scss';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider>
          <Navigation />
          <MainContent>{children}</MainContent>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
