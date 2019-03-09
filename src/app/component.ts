import {ChildNode,Node,ParentNode} from './Node';
import { ControlBase } from './control-base';
import { ComponentModel } from './component-model';

export class Component<T> extends ControlBase<T> implements ChildNode{
  
  private parent:ParentNode;
  private _data:ComponentModel<T>;

  getParent(): ParentNode {
    return this.parent;
  }
  
  getChildren(): ChildNode[] {
    return null;
  }
  
  set data(data:ComponentModel<T>){
    this.data=data;
  }

  }
  