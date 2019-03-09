import { Component, Input, OnInit }  from '@angular/core';
import {Container} from './container-component';
import { ComponentModel, ContainerModel } from './component-model';
import { FormGroup,FormControl }                 from '@angular/forms';

@Component({
    selector: 'form-container',
    templateUrl: './form.html'
  })
export default class Form extends Container implements OnInit {
    
    @Input() containerModel:ContainerModel<any>[];
    @Input() form: FormGroup = new FormGroup({});
    constructor(){
        super();
    }

    payLoad = '';

    onSubmit:()=>{

    }

    ngOnInit() {
        console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
        this.form.addControl( "x",new FormControl("xxxxxxxxxxxxxxxxxxxxxxx")),
        this.form.addControl( "y",new FormControl("y"));
     }
}