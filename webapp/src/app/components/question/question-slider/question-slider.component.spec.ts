import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSliderComponent } from './question-slider.component';

describe('QuestionSliderComponent', () => {
  let component: QuestionSliderComponent;
  let fixture: ComponentFixture<QuestionSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
