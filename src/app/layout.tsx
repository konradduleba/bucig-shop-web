import { FC, PropsWithChildren } from 'react';
import { Montserrat } from 'next/font/google';
import { LeftSideMenu, MainContent } from '@layouts';
import { ThemeProvider } from '@providers';

import '@styles/global.scss';

const inter = Montserrat({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider>
          <LeftSideMenu />
          {/* <Navigation />*/}
          <MainContent>{children}</MainContent>
          {/*<Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
