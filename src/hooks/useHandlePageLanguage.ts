import { usePathname, useRouter } from 'next/navigation';
import { Locales, useI18nContext } from '@i18n';

export const useHandlePageLanguage = () => {
  const { locale } = useI18nContext();
  const pathName = usePathname();
  const router = useRouter();

  const onChangeLanguage = (languageKey: Locales) => {
    if (languageKey === locale) {
      return;
    }

    const updatedUrl = pathName.replace(`/${locale}/`, `/${languageKey}/`);

    router.push(updatedUrl);
  };

  return {
    onChangeLanguage,
    selectedLocale: locale,
  };
};
