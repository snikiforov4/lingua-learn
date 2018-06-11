import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'dictionary-entry-dialog',
  templateUrl: './dictionary-entry-dialog.component.html',
  styleUrls: ['./dictionary-entry-dialog.component.css']
})
export class DictionaryEntryDialog implements OnInit {
  private entry: FormGroup;

  constructor(public dialogRef: MatDialogRef<DictionaryEntryDialog>,
              private formBuilder: FormBuilder) {
    this.entry = formBuilder.group({
      'word': ['', Validators.required],
      'translation': ['', Validators.required],
    });
  }

  ngOnInit() {
  }

}
