import React from 'react';
import { useState } from 'react';
import Tree from './Tree';
import '../styles/TreeNode.css'
const TreeNode = ({ node,addNode,removeNode,editNode,btnStates,setBtnStates}) => {
    const nodeEvent = (e)=>{
        e.preventDefault();
        if(btnStates.addState){
            addNode(node.id);
        }
        else if(btnStates.removeState){
            removeNode(node.id);
        }
        else if(btnStates.editState){
            setEditCurrentLabel(true);
            setChildVisiblity(false);
        }
        const states = {addState:false,removeState:false,editState:false,resetState:false};
        setBtnStates(states)
    }
    const open = ()=>{
        if(!editCurrentLabel&&!btnStates.removeState&&!btnStates.editState){
            if(btnStates.addState&&childVisible)return;
            setChildVisiblity(v=>!v)
        }

    }
    const changeName = () =>{
        editNode(node.id,inpValue);
        setEditCurrentLabel(false);
    }
    const [childVisible, setChildVisiblity] = useState(true);
    const [editCurrentLabel,setEditCurrentLabel] = useState(false);
    const [inpValue,setInpValue] = useState('');
    const hasChild = node.children ? true : false;
  
    return (
      <li
      className="treeNode"
      >
        <div
        className='treeEl'
        onClick={open}
        style={
            btnStates.addState?{cursor:`copy`}
            :btnStates.editState?{cursor:`text`}
            :{cursor:`pointer`}
        }
        >
          {editCurrentLabel&&
            <>
                <input
                className='inpField'
                value={inpValue}
                onChange={(e)=>setInpValue(e.target.value)}
                type="text" />
                <div className='btn' id='applyBtn' onClick={changeName}>Apply</div>
            </>
            ||
            <>
              {hasChild && (
                  <div
                  className={`treeToggler ${childVisible ? "active" : ""}`}
                  >
                    {">"}
                  </div>
              )}
              <div onClick={(e)=>nodeEvent(e)}>
                  {node.label}
              </div>
            </>
          }
        </div>
  
        {hasChild && childVisible && (
          <div>
            <ul className="treeContainer">
              <Tree
              data={node.children}
              addNode = {addNode}
              removeNode = {removeNode}
              editNode = {editNode}
              btnStates={btnStates}
              setBtnStates={setBtnStates}
              />
            </ul>
          </div>
        )}
      </li>
    );
  };
export default TreeNode;