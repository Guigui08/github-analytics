import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NavbarModule } from './layout/navbar/navbar.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { InitAppConfigurationService } from './shared/service/init-app-configuration.service';
import { WmdPageHeaderModule } from './layout/page-header/page-header.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function ConfigurationInit(initAppConfigurationService: InitAppConfigurationService) {
  return (): Promise<void> => initAppConfigurationService.init();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NavbarModule,
    FontAwesomeModule,
    WmdPageHeaderModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigurationInit,
      deps: [InitAppConfigurationService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private readonly translateService: TranslateService, private readonly faLibrary: FaIconLibrary) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
    this.faLibrary.addIconPacks(fas);
  }
}
