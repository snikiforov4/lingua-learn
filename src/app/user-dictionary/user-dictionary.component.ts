import { Component, OnInit } from '@angular/core';
import { DictionaryEntry } from '../dictionary-entry';
import { DICTIONARY } from '../mock-dictionary';

@Component({
  selector: 'user-dictionary',
  templateUrl: './user-dictionary.component.html',
  styleUrls: ['./user-dictionary.component.css']
})
export class UserDictionaryComponent implements OnInit {
  dictionary = DICTIONARY;

  selectedEntry: DictionaryEntry;

  constructor() {
  }

  ngOnInit() {
  }

  selectEntry(entry: DictionaryEntry) {
    this.selectedEntry = entry;
  }
}
