import { Component, OnInit } from '@angular/core';
import { DictionaryEntry } from '../dictionary-entry';

@Component({
  selector: 'user-dictionary',
  templateUrl: './user-dictionary.component.html',
  styleUrls: ['./user-dictionary.component.css']
})
export class UserDictionaryComponent implements OnInit {
  entry: DictionaryEntry = {
    id: 1,
    word: 'Hero',
    translation: 'Герой',
  };

  constructor() {
  }

  ngOnInit() {
  }

}
