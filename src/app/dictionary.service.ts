import {Injectable} from '@angular/core';
import {DICTIONARY} from './mock-dictionary';
import {DictionaryEntry} from "./dictionary-entry";
import {Observable, of} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private readonly dictionary: DictionaryEntry[];
  private idCnt = 1;

  constructor() {
    this.dictionary = DICTIONARY.map(e => {
      e.id = this.idCnt++;
      return e;
    });
  }

  getAllEntries(): Observable<DictionaryEntry[]> {
    return of([...this.dictionary]);
  }

  addEntry(entry: DictionaryEntry): Observable<DictionaryEntry> {
    entry.id = this.idCnt++;
    this.dictionary.unshift(entry);
    console.log(`Add new entry to dictionary=${JSON.stringify(entry)}`);
    return of(entry);
  }
}
