import type { Translation } from '../i18n-types';

const en: Translation = {
  MENU: {
    JOIN_US: 'Join us',
    CONFIGURATOR: 'Configurator',
    LINK: '/en{0}',
    FALLBACK: 'Fallback',
    PRIVACY_POLICY: 'Privacy policy',
  },
  HOURS: {
    MON_FRI: 'Mon-Fri',
    SAT: 'Sat',
  },
  COMMON: {
    WRITE_A_MESSAGE: 'Write a message',
    ADDRESS: 'Address',
    EMAIL: 'e-mail',
    OPEN_HOURS: 'schedule',
  },
  ERROR: {
    NOT_FOUND_TITLE: 'Page does not exist.',
    NOT_FOUND_DESCRIPTION:
      'Unfortunately, the page that you tried to find does not exist. You can go the home page.',
    NOT_FOUND_BUTTON: 'Home page',
  },
  CREDITS: {
    AUTHOR: 'Website development',
  },
  SEO: {
    LOGIN_ARIA_LABEL: 'Login into your account',
  },
  LOGIN: {
    TITLE: 'Login',
    FORGET_PASSWORD: 'Forget your password?',
    REGISTER: 'Register',
    SUBMIT_BUTTON: 'Login',
    OR: 'or',
    SIGN_IN_WITH_GOOGLE: 'Sign in with Google',
    SIGN_IN_WITH_GITHUB: 'Sign in with Github',
    PASSWORD: 'Password',
  },
  VALIDATION: {
    REQUIRED: '{field} is required',
    EMAIL_IS_TAKEN:
      'This e-mail address is already taken. Please use different login method or e-mail',
    INCORRECT_PASSWORD_OR_LOGIN: 'Invalid e-mail address or password',
  },
};

export default en;
