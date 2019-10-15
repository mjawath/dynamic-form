import { Component, ViewChild }       from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionService } from './question.service';
import { ContainerModel, ComponentModel } from './component-model';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FieldConfig } from './field.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <div>
      <h2>Dynamic form template </h2>
      <form-container [containerModel]="containerModel" ></form-container>
    
    
      <div class="form">
      <div style="text-align:center">
        <h1>
          Registration Form
        </h1>
      </div>
      <dynamic-form [fields]="regConfig" (submit)="submit($event)">
      </dynamic-form>
      <div class="margin-top">
      </div>
    </div>
      </div>
    </div>
    
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];
  formGroup:FormGroup;
  containerModel:ContainerModel<any>;

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
    let group: any = {};


    // let componentModel = new ComponentModel<string>();
    // componentModel.key="x";
  
    // let componentModel1 = new ComponentModel<string>();
    // componentModel1.key="y";

    // this.containerModel = new ContainerModel<string>([componentModel,componentModel1]);
  

    let inputcom= {        
      key: "testlabel",
      label: "Test Lable",
      controlType: "input",
    }
    let formTest = {
      key: "testform",
      label: "Test Form",
      controlType: "form",
      components:[inputcom  ]
    }
    this.containerModel = new ContainerModel(formTest); 
  
    this.formGroup= new FormGroup(group);
    }
    regConfig: FieldConfig[] = [
      {
        type: "input",
        label: "Username",
        inputType: "text",
        name: "name",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Name Required"
          },
          {
            name: "pattern",
            validator: Validators.pattern("^[a-zA-Z]+$"),
            message: "Accept only text"
          }
        ]
      },
      {
        type: "input",
        label: "Email Address",
        inputType: "email",
        name: "email",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Email Required"
          },
          {
            name: "pattern",
            validator: Validators.pattern(
              "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
            ),
            message: "Invalid email"
          }
        ]
      },
      {
        type: "input",
        label: "Password",
        inputType: "password",
        name: "password",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Password Required"
          }
        ]
      },
      {
        type: "radiobutton",
        label: "Gender",
        name: "gender",
        options: ["Male", "Female"],
        value: "Male"
      },
      {
        type: "date",
        label: "DOB",
        name: "dob",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Date of Birth Required"
          }
        ]
      },
      {
        type: "select",
        label: "Country",
        name: "country",
        value: "UK",
        options: ["India", "UAE", "UK", "US"]
      },
      {
        type: "checkbox",
        label: "Accept Terms",
        name: "term",
        value: true
      },
      {
        type: "button",
        label: "Save"
      }
    ];
  }