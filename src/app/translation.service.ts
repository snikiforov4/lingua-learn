import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {yandexApiKey} from './keys';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translateUrl: string = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${yandexApiKey}`;

  constructor(private http: HttpClient,) {
  }

  translate(text: string): Observable<string> {
    const url = `${this.translateUrl}&lang=ru&text=${text}`;
    return this.http.get<string>(url);
  }
}
