import {ParentNode,Node} from './Node';
import { ControlBase } from './control-base';

export class Container extends ControlBase<any> implements ParentNode {

    private children:Node[];

    getChildren(): Node[] {
        return this.children;
    }
    

}