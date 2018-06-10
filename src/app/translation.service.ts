import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {yandexApiKey} from './keys';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translateUrl: string = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${yandexApiKey}`;

  constructor(private http: HttpClient,) {
  }

  translate(text: string): Observable<string[]> {
    const url = `${this.translateUrl}&lang=ru&text=${text}`;
    return this.http.get<any>(url)
      .pipe(
        map(resp => {
          if (resp.code !== 200) {
            throw Error(`received response with code: ${resp.code}`);
          } else {
            return resp.text;
          }
        }),
        catchError(err => of([]))
      );
  }
}
