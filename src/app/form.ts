import { Component, Input, OnInit }  from '@angular/core';
import {Container} from './container-component';
import { ComponentModel, ContainerModel } from './component-model';
import { FormGroup,FormControl, Validators, AbstractControl }                 from '@angular/forms';

@Component({
    selector: 'form-container',
    templateUrl: './form.html'
  })
export default class Form extends Container implements OnInit {
    
    @Input() containerModel:ContainerModel<any>;
    form: FormGroup = new FormGroup({});
    constructor(){
        super();
    }

    onSubmit:()=>{

    }

    ngOnInit() {
        let group:any= [];
        if(this.containerModel && this.containerModel.getChildren()){
            this.containerModel.getChildren().forEach(comp => {
                group[comp.key] = comp.required ? 
                                                        new FormControl(comp.value || '', Validators.required)
                                                    :   new FormControl(comp.value || '');
          });
        }
          this.form =  new FormGroup(group);
    }
}