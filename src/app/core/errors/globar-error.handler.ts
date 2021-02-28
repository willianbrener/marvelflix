import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {environment} from '../../../environments/environment';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) { }

    handleError(error: Error) {
      console.log(environment.settings.appErrorPrefix + error.message);
    }
}
