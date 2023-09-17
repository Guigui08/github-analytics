import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { LanguageLoaderService } from './language-loader.service';

@Injectable({
  providedIn: 'root',
})
export class InitAppConfigurationService {
  constructor(private readonly translateService: TranslateService, private readonly loadLanguageService: LanguageLoaderService) {}

  async init(): Promise<void> {
    this.translateService.onLangChange.subscribe(async (event: LangChangeEvent) => {
      this.loadLanguageService.loadLanguage(event.lang);
    });
  }
}
