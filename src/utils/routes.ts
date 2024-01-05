export const ROUTES = {
  HOME: () => '/',
  ABOUT_US: () => '/about-us',
  NEWS: () => '/news',
  MESSAGE_US: () => '/message-us',
  CONFIGURATOR: () => '/configurator',
  JOIN_US: () => '/join-us',
  LOGIN: () => '/login',
  PRIVACY_POLICY: () => '/private-policy',
  FAVOURITES: () => '/favourites',
  RECOVER_PASSWORD: () => '/recover-password',
  REGISTER: () => '/register',
};

export const PROTECTED_ROUTES = {
  DASHBOARD: () => '/auth/dashboard',
};
