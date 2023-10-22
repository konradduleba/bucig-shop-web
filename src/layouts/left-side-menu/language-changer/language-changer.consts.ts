export enum Languages {
  PL = 'pl',
  ENG = 'eng',
}

export interface AvailableLanguage {
  key: Languages;
  value: string;
}

export const AVAILABLE_LANGUAGES: AvailableLanguage[] = [
  {
    key: Languages.PL,
    value: 'Pl',
  },
  {
    key: Languages.ENG,
    value: 'Eng',
  },
];
