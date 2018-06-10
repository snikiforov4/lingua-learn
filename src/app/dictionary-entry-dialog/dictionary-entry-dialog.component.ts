import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'dictionary-entry-dialog',
  templateUrl: './dictionary-entry-dialog.component.html',
  styleUrls: ['./dictionary-entry-dialog.component.css']
})
export class DictionaryEntryDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<DictionaryEntryDialog>,) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
