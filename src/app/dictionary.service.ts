import {Injectable} from '@angular/core';
import {DictionaryEntry} from "./dictionary-entry";
import {Observable, of} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private readonly dictionary: DictionaryEntry[];
  private idCnt: number;

  constructor() {
    this.dictionary = JSON.parse(window.localStorage.getItem('dict')) || [];
    console.log(JSON.stringify(this.dictionary));
    this.idCnt = this.dictionary.map(e => e.id)
      .filter(id => id).reduce((p, c) => Math.max(p, c), 0) + 1;
  }

  getAllEntries(): Observable<DictionaryEntry[]> {
    return of([...this.dictionary]);
  }

  addEntry(entry: DictionaryEntry): Observable<DictionaryEntry> {
    entry.id = this.idCnt++;
    console.log(`Add new entry to dictionary=${JSON.stringify(entry)}`);
    this.dictionary.unshift(entry);
    window.localStorage.setItem('dict', JSON.stringify(this.dictionary));
    return of(entry);
  }

  editEntry(newEntry: DictionaryEntry): Observable<DictionaryEntry | undefined> {
    const idx = this.dictionary.findIndex(e => e.id == newEntry.id);
    if (idx > 0) {
      console.log(`Edit entry with id=${newEntry.id}`);
      this.dictionary[idx] = newEntry;
      window.localStorage.setItem('dict', JSON.stringify(this.dictionary));
      return of(newEntry);
    } else {
      console.log(`Entry with id=${newEntry.id} not found!`);
      return of(undefined);
    }
  }
}
