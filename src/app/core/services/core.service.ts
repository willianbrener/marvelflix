import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import {Thumbnail} from '../entities/thumbnail';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  copyright: string;

  constructor(private snackbar: MatSnackBar) {}

  getImage(variant: string, thumbnail: Thumbnail): string {
    return `${thumbnail.path}/${variant}.${thumbnail.extension}`;
  }

  handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      throw error;
    } else {
      this.snackbar.open(environment.settings.appErrorPrefix + 'Something bad happened; please try again later.');
    }

    return throwError(error);
  }

}
