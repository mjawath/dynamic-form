import { BrowserModule }                from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';

import { AppComponent }                 from './app.component';
import  Form          from './form';
import  {InputElement}          from './input-element';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

import { DynamicFieldDirective } from "./components/dynamic-field/dynamic-field.directive";
import { DynamicFormComponent as ddd} from "./components/dynamic-form/dynamic-form.component";

import { InputComponent } from "./components/input/input.component";
import { ButtonComponent } from "./components/button/button.component";
import { SelectComponent } from "./components/select/select.component";
import { DateComponent } from "./components/date/date.component";
import { RadiobuttonComponent } from "./components/radiobutton/radiobutton.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { MaterialModule } from './material.module';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,BrowserAnimationsModule
  ],
  declarations: [ AppComponent, InputElement, DynamicFormComponent,
                    DynamicFormQuestionComponent,Form,DynamicFieldDirective,ddd,
                    
                    InputComponent,
                    ButtonComponent,
                    SelectComponent,
                    DateComponent,
                    RadiobuttonComponent,
                    CheckboxComponent
                  ], 
  bootstrap: [ AppComponent ],  
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent
  ]

})
export class AppModule {
  constructor() {
  }
}
