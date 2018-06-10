import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryEntryDialog } from './dictionary-entry-dialog.component';

describe('DictionaryEntryDialogComponent', () => {
  let component: DictionaryEntryDialog;
  let fixture: ComponentFixture<DictionaryEntryDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaryEntryDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryEntryDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
