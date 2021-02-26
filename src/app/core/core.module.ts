import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MediaMatcher } from '@angular/cdk/layout';

import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { GlobalErrorHandler } from './errors/globar-error.handler';
import {AuthInterceptor} from './interceptors/auth-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
  ],
  providers: [
    MediaMatcher,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: 'LOCALSTORAGE', useValue: window.localStorage }
  ],
  exports: [
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  }
}
