'use client';

import { useLanguage } from './LanguageContext';
import { t as translateFn, TranslationKey } from './translations';

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: TranslationKey, replacements?: Record<string, string>) => {
    return translateFn(key, language, replacements);
  };

  return { t, language };
}
