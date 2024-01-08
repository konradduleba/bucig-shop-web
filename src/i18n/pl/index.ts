import type { Translation } from '../i18n-types';

const pl: Translation = {
  MENU: {
    JOIN_US: 'Dołącz do nas',
    CONFIGURATOR: 'Konfigurator',
    LINK: '/pl{0}',
    FALLBACK: 'Zdjęcie zastępcze',
    PRIVACY_POLICY: 'Polityka Prywatności',
  },
  HOURS: {
    MON_FRI: 'Pon-Pią',
    SAT: 'Sob',
  },
  COMMON: {
    WRITE_A_MESSAGE: 'Napisz do nas',
    ADDRESS: 'Adres',
    EMAIL: 'e-mail',
    OPEN_HOURS: 'Dostępność',
  },
  CREDITS: {
    AUTHOR: 'Stworzone przez',
  },
  ERROR: {
    NOT_FOUND_TITLE: 'Strona nie istnieje.',
    NOT_FOUND_DESCRIPTION:
      'Niestety, nie znaleziono strony, której szukasz. Możesz wrócić na stronę główną.',
    NOT_FOUND_BUTTON: 'Strona główna',
  },
  SEO: {
    LOGIN_ARIA_LABEL: 'Przejdź do strony logowania',
  },
  LOGIN: {
    TITLE: 'Zaloguj się',
    FORGET_PASSWORD: 'Zapomniałeś hasła?',
    REGISTER: 'Zarejestruj się',
    SUBMIT_BUTTON: 'Zaloguj',
    OR: 'lub',
    SIGN_IN_WITH_GOOGLE: 'Zaloguj się kontem Google',
    SIGN_IN_WITH_GITHUB: 'Zaloguj się kontem Github',
    PASSWORD: 'Hasło',
  },
  VALIDATION: {
    REQUIRED: '{field} jest wymagane',
    EMAIL_IS_TAKEN:
      'Istnieje już konto o takim adresie e-mail. Zaloguj się inną metodą lub innym adresem e-mail',
    INCORRECT_PASSWORD_OR_LOGIN: 'Nieprawidłowy adres e-mail lub hasło',
  },
};

export default pl;
