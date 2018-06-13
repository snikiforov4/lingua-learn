import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, flatMap} from "rxjs/operators";
import {TranslationService} from "../translation.service";
import {DictionaryEntry} from "../dictionary-entry";

@Component({
  selector: 'dictionary-entry-dialog',
  templateUrl: './dictionary-entry-dialog.component.html',
  styleUrls: ['./dictionary-entry-dialog.component.css']
})
export class DictionaryEntryDialog implements OnInit {
  title: string;
  acceptButtonText: string;
  entryForm: FormGroup;
  autoTranslations: Observable<string[]>;

  constructor(private translationService: TranslationService,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data?: DictionaryEntry) {
    this.entryForm = formBuilder.group({
      'word': [data ? data.word : '', Validators.required],
      'translation': [data ? data.translation : '', Validators.required],
    });
    if (data) {
      this.title = 'Edit word';
      this.acceptButtonText = 'Save';
    } else {
      this.title = 'Add new word';
      this.acceptButtonText = 'Add';
    }
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

  get word() {
    return this.entryForm.get('word');
  }

  get translation() {
    return this.entryForm.get('translation');
  }
}
