import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryListPageComponent } from './dictionary-list-page.component';

describe('DictionaryListPageComponent', () => {
  let component: DictionaryListPageComponent;
  let fixture: ComponentFixture<DictionaryListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DictionaryListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
