import { Component }       from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionService } from './question.service';
import { ContainerModel, ComponentModel } from './component-model';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions"></app-dynamic-form>

      <div>
      <h2>Dynamic form template </h2>
      <form-container [containerModel]="containerModel" ></form-container>
      </div>
    </div>
    
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];
  formGroup:FormGroup;
  containerModel:ContainerModel<any>;


  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
    let group: any = {};


    let componentModel = new ComponentModel<string>();
    componentModel.key="x";
  
    let componentModel1 = new ComponentModel<string>();
    componentModel1.key="y";

    this.containerModel = new ContainerModel<string>([componentModel,componentModel1]);
    


    this.questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    this.formGroup= new FormGroup(group);

  }
}
