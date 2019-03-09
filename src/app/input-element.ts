import FormControlElement from "./form-control-element";
import { Component, Input, OnInit }  from '@angular/core';
import { ComponentModel } from "./component-model";
import { FormGroup }                 from '@angular/forms';


@Component({
    selector: 'input-element',
    templateUrl: './input-element.html'
  })
export default class InputElement<T> extends FormControlElement<T>{
    @Input() form: FormGroup= new FormGroup({});
    @Input() component:ComponentModel<T>;

constructor(){
    super();
}

@Input('data')
set allowDay(value: any) {
    this.component = value;
}

}