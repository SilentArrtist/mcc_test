import React from 'react';
import TreeNode from './TreeNode';
const Tree = ({ data = [],addNode,removeNode,editNode,btnStates,setBtnStates}) => {
    return (
      <div className="tree">
        <ul className="treeContainer">
          {data.map((tree) => (
            <TreeNode
            key = {tree.key}
            node={tree}
            addNode ={addNode}
            removeNode = {removeNode}
            editNode = {editNode}
            btnStates={btnStates}
            setBtnStates={setBtnStates}
            />
          ))}
        </ul>
      </div>
    );
  };

export default Tree;