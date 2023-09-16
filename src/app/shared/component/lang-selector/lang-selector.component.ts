import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const LANGS = [
  { label: 'English', value: 'en', src: 'assets/images/united-kingdom.png' },
  {
    label: 'French',
    value: 'fr',
    src: 'assets/images/france.png',
  },
];

@Component({
  selector: 'wmd-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss'],
})
export class LangSelectorComponent implements OnInit {
  currentLang!: string;
  langs = LANGS;

  constructor(private readonly translateService: TranslateService) {}

  ngOnInit(): void {
    this.currentLang = this.translateService.currentLang;
  }

  onLangChange(lang: string): void {
    this.currentLang = lang;
    this.translateService.use(lang);
  }
}
