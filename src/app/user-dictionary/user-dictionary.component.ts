import {Component, OnInit} from '@angular/core';
import {DictionaryEntry} from '../dictionary-entry';
import {DICTIONARY} from '../mock-dictionary';
import {TranslationService} from "../translation.service";

@Component({
  selector: 'user-dictionary',
  templateUrl: './user-dictionary.component.html',
  styleUrls: ['./user-dictionary.component.css']
})
export class UserDictionaryComponent implements OnInit {
  dictionary = DICTIONARY;

  selectedEntry: DictionaryEntry;

  constructor(private translationService: TranslationService) {
  }

  ngOnInit() {
    this.translateHello();
  }

  selectEntry(entry: DictionaryEntry) {
    this.selectedEntry = entry;
  }

  private translateHello() {
    let word = 'Hello';
    this.translationService.translate(word)
    // .subscribe(translation => this.dictionary.push({id: 42, word, translation}));
      .subscribe(translation => console.log(translation));
  }
}
