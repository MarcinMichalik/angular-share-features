import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageFormPageComponent } from './usage-form-page.component';

describe('UsageFormPageComponent', () => {
  let component: UsageFormPageComponent;
  let fixture: ComponentFixture<UsageFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageFormPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsageFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
