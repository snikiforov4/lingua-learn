import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UserSettingsComponent implements OnInit {
  languagesList = ['english', 'russian'];
  languageControl = new FormControl(this.languagesList[0]);
  numOfWordsControl = new FormControl(10);

  constructor() { }

  ngOnInit() {
  }

}
