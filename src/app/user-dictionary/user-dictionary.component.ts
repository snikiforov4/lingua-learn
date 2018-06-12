import {Component, OnInit} from '@angular/core';
import {DictionaryEntry} from '../dictionary-entry';
import {DictionaryService} from "../dictionary.service";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {DictionaryEntryDialog} from "../dictionary-entry-dialog/dictionary-entry-dialog.component";

const MAT_DIALOG_CONFIG: MatDialogConfig = {
  width: '250px',
};

@Component({
  selector: 'user-dictionary',
  templateUrl: './user-dictionary.component.html',
  styleUrls: ['./user-dictionary.component.css']
})
export class UserDictionaryComponent implements OnInit {
  dictionary: DictionaryEntry[];

  constructor(private dialog: MatDialog,
              private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.dictionaryService.getAllEntries()
      .subscribe(dictionary => this.dictionary = dictionary);
  }

  editEntry(oldEntry: DictionaryEntry) {
    let dialogRef = this.dialog.open(DictionaryEntryDialog, {
      width: '250px',
      data: oldEntry,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let newEntry: DictionaryEntry = Object.assign({}, oldEntry, result);
        this.dictionaryService.editEntry(newEntry)
          .subscribe(savedEntry => {
            if (savedEntry) {
              const idx = this.dictionary.findIndex(e => e.id == savedEntry.id);
              if (idx > 0) {
                this.dictionary[idx] = savedEntry;
              }
            }
          });
      }
    });
  }

  addEntry(): void {
    let dialogRef = this.dialog.open(DictionaryEntryDialog, MAT_DIALOG_CONFIG);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dictionaryService.addEntry(result)
          .subscribe(entry => this.dictionary.unshift(entry));
      }
    });
  }

}
