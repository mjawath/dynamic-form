export interface Node{

}
export interface ParentNode extends Node{

    /**
     * getChildren
     */
    getChildren():Node[];
}

export interface ChildNode extends Node{

    getParent():Node;

}