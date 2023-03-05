import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageDictionaryFormDialogComponent } from './usage-dictionary-form-dialog.component';

describe('UsageDictionaryFormDialogComponent', () => {
  let component: UsageDictionaryFormDialogComponent;
  let fixture: ComponentFixture<UsageDictionaryFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageDictionaryFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsageDictionaryFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
