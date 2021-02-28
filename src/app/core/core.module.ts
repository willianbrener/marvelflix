import {ErrorHandler, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MediaMatcher} from '@angular/cdk/layout';

import {GlobalErrorHandler} from './errors/globar-error.handler';
import {AuthInterceptor} from './interceptors/auth-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
  ],
  providers: [
    MediaMatcher,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: 'LOCALSTORAGE', useValue: window.localStorage },
  ],
  exports: [
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  }
}
