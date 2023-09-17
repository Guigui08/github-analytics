import { Injectable } from '@angular/core';
import localeEn from '@angular/common/locales/en';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LanguageLoaderService {
  loadLanguage(langKey: string) {
    switch (langKey.toLowerCase()) {
      case 'en':
        registerLocaleData(localeEn);
        break;
      case 'fr':
        registerLocaleData(localeFr);
        break;
      default:
        console.error('Language not found (' + langKey + ')');
        break;
    }
  }
}
