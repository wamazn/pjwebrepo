import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { includes } from 'lodash';

const languageKey = 'language';

/**
 * Pass-through function to mark a string for translation extraction.
 * Running `npm translations:extract` will include the given string by using this.
 * @param s The string to extract for translation.
 * @return The same string.
 */
export function extract(s: string) {
    return s;
}

@Injectable()
export class I18nService {
    defaultLanguage = 'en';
    supportedLanguages = ['en, fr'];

    constructor(private translateService: TranslateService) {
    }

    /**
     * Initializes i18n for the application.
     * Loads language from local storage if present, or sets default language.
     * @param defaultLanguage The default language to use.
     * @param supportedLanguages The list of supported languages.
     */
/*     init(defaultLanguage: string, supportedLanguages: string[]) {
        this.defaultLanguage = defaultLanguage;
        this.supportedLanguages = supportedLanguages;
        this.language = '';

        this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
            localStorage.setItem(languageKey, event.lang);
        });
    } */

    /**
     * Sets the current language.
     * Note: The current language is saved to the local storage.
     * If no parameter is specified, the language is loaded from local storage (if present).
     * @param language The IETF language code to set.
     */
    set language(language: string) {
        language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
        let isSupportedLanguage = includes(this.supportedLanguages, language);

        // If no exact match is found, search without the region
        if (language && !isSupportedLanguage) {
            language = language.split('-')[0];
            language = this.supportedLanguages.find(supportedLanguage => supportedLanguage.startsWith(language)) || '';
            isSupportedLanguage = Boolean(language);
        }

        // Fallback if language is not supported
        if (!isSupportedLanguage) {
            language = this.defaultLanguage;
        }

        this.translateService.use(language);
    }

    /**
     * Gets the current language.
     * @return The current language code.
     */
    get language(): string {
        return this.translateService.currentLang;
    }
}
