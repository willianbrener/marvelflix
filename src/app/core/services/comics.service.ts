import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {environment} from '../../../environments/environment';
import {ContextService} from './core.service';
import {Comic} from '../entities/comic';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(private http: HttpClient, private contextService: ContextService) {}

  getComics(limit: string, offset: string): Observable<Comic[]> {
    const url = `${environment.apiUrl}comics?format=comic&formatType=comic&orderBy=modified&limit=${limit}&offset=${offset}`;
    return this.http.get<Comic[]>(url).pipe(
      map((response: any) => response.data.results),
      catchError(this.contextService.handleError)
    );
  }

}
