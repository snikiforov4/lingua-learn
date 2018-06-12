import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'dictionary-entry-dialog',
  templateUrl: './dictionary-entry-dialog.component.html',
  styleUrls: ['./dictionary-entry-dialog.component.css']
})
export class DictionaryEntryDialog {
  private entryForm: FormGroup;
  private autoTranslations: Observable<string[]>;

  constructor(public dialogRef: MatDialogRef<DictionaryEntryDialog>,
              private formBuilder: FormBuilder) {
    this.entryForm = formBuilder.group({
      'word': ['', Validators.required],
      'translation': ['', Validators.required],
    });
  }

  get word() { return this.entryForm.get('word'); }

  get translation() { return this.entryForm.get('translation'); }

}
