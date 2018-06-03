import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDictionaryComponent } from './user-dictionary.component';

describe('UserDictionaryComponent', () => {
  let component: UserDictionaryComponent;
  let fixture: ComponentFixture<UserDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
