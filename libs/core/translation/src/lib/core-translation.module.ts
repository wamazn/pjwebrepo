import { NgModule, Inject, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// libs
import { TranslateLoader, TranslateService, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { I18nService } from './i18n.service';

export const PlatformLanguageToken = new InjectionToken<string>(
  'PlatformLanguageToken'
);

export function platformLangFactory() {
  const browserLang = window.navigator.language || 'en'; // fallback English
  // browser language has 2 codes, ex: 'en-US'
  return browserLang.split('-')[0];
}

export function createTranslateLoader(http: HttpClient) {
  // we can just pass any absolute route to the static files
  // schema protocole://route/languageCode.json the suffix is optional
  return new TranslateHttpLoader(http, `./assets/i18n/`, '.json');
}

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers:[{
    provide: PlatformLanguageToken,
    useFactory: platformLangFactory
  }, I18nService]
})
export class CoreTranslationModule {
  constructor(
    @Inject(PlatformLanguageToken) lang: string,
    translate: TranslateService) {
      translate.use(lang);
  }
}
