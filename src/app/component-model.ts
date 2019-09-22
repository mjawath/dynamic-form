import {Node,ParentNode,ChildNode} from './Node';

export  class ComponentBaseModel implements Node{
    value?;
    key: string;
    label?: string;
    required : boolean = false;
    order: number = 0;
    controlType: string;
  
    constructor(options: {
        value?:any,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 0 : options.order;
      this.controlType = options.controlType || '';
    }
  }

  export class ComponentModel<T>  extends ComponentBaseModel implements ChildNode{
      
    container?:ContainerModel<any>;
      
    getParent(): Node {
        return this.container;
    }
      
  } 

export class ContainerModel<T>  extends ComponentBaseModel implements ParentNode{

    components:ComponentModel<any>[];
    
    constructor(options){
        super();
        if(options && options.components){
          this.components = options.components;
        }
    }
    getChildren(): ComponentModel<any>[] {
        return this.components;
    }
      
} 