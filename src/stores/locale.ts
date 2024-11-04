import { browser, createI18n, localeFrom } from "@nanostores/i18n";
import { persistentAtom } from "@nanostores/persistent";

const $locale = persistentAtom<string>("locale", "en");

const $localeStore = localeFrom($locale, browser({
  available: ["en", "ja", "vi"],
  fallback: "en",
}));

const i18n = createI18n($localeStore, {
  get(code: string) {
    return import(`../i18n/${code}.json`);
  }
});

export { $locale, $localeStore, i18n };

