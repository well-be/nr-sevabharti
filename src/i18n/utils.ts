import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL): keyof typeof ui {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  let pathname = url.pathname;
  if (basePath && pathname.startsWith(basePath)) {
    pathname = pathname.slice(basePath.length);
  }
  const [, lang] = pathname.split('/');
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
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
    let cleanPath = path.startsWith('/') ? path : `/${path}`;

    // Strip basePath if present in path
    if (basePath && cleanPath.startsWith(basePath)) {
      cleanPath = cleanPath.slice(basePath.length) || '/';
    }

    // Strip existing language prefix if present
    const pathParts = cleanPath.split('/');
    if (pathParts[1] && pathParts[1] in ui) {
      pathParts.splice(1, 1);
    }
    const remainingPath = pathParts.join('/') || '';
    const normalizedRemaining = remainingPath.startsWith('/') ? remainingPath : `/${remainingPath}`;

    // Default language (mr) has NO prefix: /nr-sevabharti/ or /nr-sevabharti/education
    if (targetLang === defaultLang) {
      if (normalizedRemaining === '/' || normalizedRemaining === '') {
        return `${basePath}/`;
      }
      return `${basePath}${normalizedRemaining}`;
    }

    // Non-default languages (en, hi) get prefix: /nr-sevabharti/en/ or /nr-sevabharti/en/education
    if (normalizedRemaining === '/' || normalizedRemaining === '') {
      return `${basePath}/${targetLang}/`;
    }

    return `${basePath}/${targetLang}${normalizedRemaining}`;
  };
}
