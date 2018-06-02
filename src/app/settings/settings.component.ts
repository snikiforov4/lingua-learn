import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'user-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SettingsComponent implements OnInit {
  languagesList = ['english', 'russian'];
  languageControl = new FormControl(this.languagesList[0]);

  constructor() { }

  ngOnInit() {
  }

}
