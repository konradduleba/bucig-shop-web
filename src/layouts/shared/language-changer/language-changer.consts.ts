import { Locales } from '@i18n';

export interface AvailableLanguage {
  key: Locales;
  value: string;
}

export const AVAILABLE_LANGUAGES: AvailableLanguage[] = [
  {
    key: 'pl',
    value: 'Pl',
  },
  {
    key: 'en',
    value: 'Eng',
  },
];
