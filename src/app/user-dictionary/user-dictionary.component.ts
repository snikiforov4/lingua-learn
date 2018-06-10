import {Component} from '@angular/core';
import {DictionaryEntry} from '../dictionary-entry';
import {DICTIONARY} from '../mock-dictionary';
import {TranslationService} from "../translation.service";
import {MatDialog} from "@angular/material";
import {DictionaryEntryDialog} from "../dictionary-entry-dialog/dictionary-entry-dialog.component";

@Component({
  selector: 'user-dictionary',
  templateUrl: './user-dictionary.component.html',
  styleUrls: ['./user-dictionary.component.css']
})
export class UserDictionaryComponent {
  dictionary = DICTIONARY;

  selectedEntry: DictionaryEntry;

  constructor(public dialog: MatDialog,
              private translationService: TranslationService) {
  }

  selectEntry(entry: DictionaryEntry) {
    this.selectedEntry = entry;
  }

  addEntry(): void {
    let dialogRef = this.dialog.open(DictionaryEntryDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`result=${result}`);
    });
  }

}
