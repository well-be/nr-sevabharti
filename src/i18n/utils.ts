import { ui, defaultLang, languages } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, targetLang: string = lang) {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    // Strip existing language prefix if present
    const pathParts = cleanPath.split('/');
    if (pathParts[1] in ui) {
      pathParts.splice(1, 1);
    }
    const remainingPath = pathParts.join('/') || '';
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
    return `${basePath}/${targetLang}${remainingPath}`;
  };
}
