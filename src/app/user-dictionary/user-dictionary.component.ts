import {Component} from '@angular/core';
import {DictionaryEntry} from '../dictionary-entry';
import {DICTIONARY} from '../mock-dictionary';
import {TranslationService} from "../translation.service";

@Component({
  selector: 'user-dictionary',
  templateUrl: './user-dictionary.component.html',
  styleUrls: ['./user-dictionary.component.css']
})
export class UserDictionaryComponent {
  dictionary = DICTIONARY;

  selectedEntry: DictionaryEntry;

  constructor(private translationService: TranslationService) {
  }

  selectEntry(entry: DictionaryEntry) {
    this.selectedEntry = entry;
  }
}
