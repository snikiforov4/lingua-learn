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
    let word = 'hello';
    this.translationService.translate(word)
      .subscribe(translation => {
        console.log(translation);
        if (translation.length > 0) {
          this.dictionary.push({id: 42, word, translation: translation[0]});
        }
      });
  }
}
