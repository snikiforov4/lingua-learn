import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, flatMap} from "rxjs/operators";
import {TranslationService} from "../translation.service";

@Component({
  selector: 'dictionary-entry-dialog',
  templateUrl: './dictionary-entry-dialog.component.html',
  styleUrls: ['./dictionary-entry-dialog.component.css']
})
export class DictionaryEntryDialog implements OnInit {
  entryForm: FormGroup;
  autoTranslations: Observable<string[]>;

  constructor(public dialogRef: MatDialogRef<DictionaryEntryDialog>,
              private translationService: TranslationService,
              private formBuilder: FormBuilder) {
    this.entryForm = formBuilder.group({
      'word': ['', Validators.required],
      'translation': ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.autoTranslations = this.word.valueChanges
      .pipe(
        filter(val => val.length > 1),
        debounceTime(200),
        distinctUntilChanged(),
        flatMap(val => this.translationService.translate(val))
      );
  }

  get word() { return this.entryForm.get('word'); }

  get translation() { return this.entryForm.get('translation'); }
}
