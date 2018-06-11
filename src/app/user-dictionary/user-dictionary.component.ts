import {Component, OnInit} from '@angular/core';
import {DictionaryEntry} from '../dictionary-entry';
import {DictionaryService} from "../dictionary.service";
import {MatDialog} from "@angular/material";
import {DictionaryEntryDialog} from "../dictionary-entry-dialog/dictionary-entry-dialog.component";

@Component({
  selector: 'user-dictionary',
  templateUrl: './user-dictionary.component.html',
  styleUrls: ['./user-dictionary.component.css']
})
export class UserDictionaryComponent implements OnInit {
  private dictionary: DictionaryEntry[];

  selectedEntry: DictionaryEntry;

  constructor(private dialog: MatDialog,
              private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.dictionaryService.getAllEntries()
      .subscribe(dictionary => this.dictionary = dictionary);
  }

  selectEntry(entry: DictionaryEntry) {
    this.selectedEntry = entry;
  }

  addEntry(): void {
    let dialogRef = this.dialog.open(DictionaryEntryDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dictionaryService.addEntry(result)
          .subscribe(entry => this.dictionary.unshift(entry));
      }
    });
  }

}
