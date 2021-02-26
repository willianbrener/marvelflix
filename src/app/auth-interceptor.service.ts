import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let httpParams = req.params;
    httpParams = req.params.append('apikey',  environment.apiKey);
    httpParams = req.params.append('ts',      environment.ts);
    httpParams = req.params.append('hash',    environment.hash);

    const authReq = req.clone({
      setParams: {
        apikey: environment.apiKey,
        ts: environment.ts,
        hash: environment.hash
      }
    });

    // Begin assigning parameters

    /*httpParams = httpParams.append('apikey', environment.apiKey);
    httpParams = httpParams.append('ts', environment.ts);
    httpParams = httpParams.append('hash', environment.hash);*/

    // const authReq = req.clone({params: httpParams});

    return next.handle(authReq);
  }
}
