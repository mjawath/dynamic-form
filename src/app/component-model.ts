import {Node,ParentNode,ChildNode} from './Node';

export  class ComponentBaseModel<T> implements Node{
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
  
    constructor(options: {
        value?: T,
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
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
    }
  }

  export class ComponentModel<T>  extends ComponentBaseModel<T> implements ChildNode{
      
    container:ContainerModel<any>;
      
    getParent(): Node {
        return this.container;
    }
      
  } 

export class ContainerModel<T>  extends ComponentBaseModel<T> implements ParentNode{

    components:ComponentModel<any>[];
    
    constructor(components:ComponentModel<any> [] ){
        super();
        this.components =components;
    }
    getChildren(): Node[] {
        return this.components;
    }
      
} 