import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserDictionaryComponent} from './user-dictionary/user-dictionary.component';
import {TrainingPanelComponent} from './training-panel/training-panel.component';
import {UserSettingsComponent} from './user-settings/user-settings.component';
import {DictionaryEntryDialog} from './dictionary-entry-dialog/dictionary-entry-dialog.component';
import {TranslationService} from "./translation.service";
import {DictionaryService} from "./dictionary.service";

@NgModule({
  declarations: [
    AppComponent,
    UserDictionaryComponent,
    TrainingPanelComponent,
    UserSettingsComponent,
    DictionaryEntryDialog,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDialogModule,
  ],
  entryComponents: [DictionaryEntryDialog],
  providers: [TranslationService, DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
