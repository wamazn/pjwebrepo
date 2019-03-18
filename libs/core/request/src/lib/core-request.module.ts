import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApiPrefixInterceptor, TokenInterceptor, MasterTokenInterceptor, ErrorHandlerInterceptor, CacheInterceptor } from './interceptors';
import { HttpService, HttpCacheService } from './services';

@NgModule({
  imports: [CommonModule],
  providers:[
    HttpCacheService,
    ApiPrefixInterceptor,
    /*     {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }, */
    TokenInterceptor,
    MasterTokenInterceptor,
    ErrorHandlerInterceptor,
    CacheInterceptor,
    {
      provide: HttpClient,
      useClass: HttpService
    }]
})
export class CoreRequestModule {}
