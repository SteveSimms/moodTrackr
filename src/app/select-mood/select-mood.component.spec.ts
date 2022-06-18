import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMoodComponent } from './select-mood.component';

describe('SelectMoodComponent', () => {
  let component: SelectMoodComponent;
  let fixture: ComponentFixture<SelectMoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
