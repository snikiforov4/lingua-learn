import {Component, OnInit} from '@angular/core';
import {DictionaryEntry} from '../dictionary-entry';

@Component({
  selector: 'training-panel',
  templateUrl: './training-panel.component.html',
  styleUrls: ['./training-panel.component.css']
})
export class TrainingPanelComponent implements OnInit {
  entry: DictionaryEntry = {
    id: 42,
    word: 'word',
    translation: 'слово'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
