import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionMultipleChoiceComponent } from './question/question-multiple-choice/question-multiple-choice.component';
import { QuestionSliderComponent } from './question/question-slider/question-slider.component';
import { QuestionTextComponent } from './question/question-text/question-text.component';

@NgModule({
  declarations: [
    QuestionMultipleChoiceComponent,
    QuestionSliderComponent,
    QuestionTextComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuestionMultipleChoiceComponent,
    QuestionSliderComponent,
    QuestionTextComponent
  ]
})
export class ComponentsModule { }
