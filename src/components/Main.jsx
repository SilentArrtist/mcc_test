import React, { memo, useState } from 'react';
import { useEffect } from 'react';
import Tree from './Tree';
const Main = memo(({btnStates,setBtnStates}) => {
    const [treeData,setTreeData] = useState([
        {
            id: "0",
            key:"0",
            label: "Root",
            children: [],
        },
    ]);
    function addNode(id) {
        let arr = treeData;
        let nodes = arr.slice();
        while (nodes.length) {
            const node = nodes.shift();
            if (node.id === id){
                let newEl;
                if(node.children){
                newEl = {
                    id: `${node.id}-${node?.children.length}`,
                    key:`${Math.random()*100}`,
                    label: `Node ${node.id}-${node?.children.length}`,
                }
                node.children.push(newEl);
                setTreeData(arr);
                return;
                }
                else{
                node.children=[];
                newEl = {
                    id: `${node.id}-0`,
                    key:`${Math.random()*100}`,
                    label: `Node ${node.id}-0`,
                }
                node.children.push(newEl)}
                setTreeData(arr);
                return;
            }
            if (node.children) {
            nodes.push(...node.children);
            }
        }
    }
    function removeNode(id) {
        if(id==0)return;
        let arr = treeData;
        let nodes = arr.slice();
        let prevElem;
        while (nodes.length) {
            const node = nodes.shift();
            if (node.id === id){
                for (const index in prevElem.children) {
                    if(prevElem.children[index].id===id){
                        prevElem.children.splice(index,1)
                        if(prevElem.children.length===0){
                            delete prevElem.children;
                        }
                    }
                }
                return;
            }
            if (node.children) {
            prevElem = node;
            nodes.push(...node.children);
            }
        }
    }
    function editNode(id,value) {
        let arr = treeData;
        let nodes = arr.slice();
        while (nodes.length) {
            const node = nodes.shift();
            if (node.id === id){
                node.label = value;
                localStorage.setItem("tree",JSON.stringify(arr));
                setTreeData(arr);
                return;
            }
            if (node.children) {
            nodes.push(...node.children);
            }
        }
    }

    useEffect(() => {
        if(btnStates.resetState){
            setTreeData([{
                id: "0",
                key:"0",
                label: "Root",
                children: [],
            }])
            const states = {addState:false,removeState:false,editState:false,resetState:false};
            setBtnStates(states)
        }
    }, [btnStates.resetState])
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("tree"));
        setTreeData(data)
    },[])

    useEffect(()=>{
        localStorage.setItem("tree",JSON.stringify(treeData));
    })
    

    return (
        <Tree
        data={treeData}
        addNode = {addNode}
        removeNode = {removeNode}
        editNode = {editNode}
        btnStates={btnStates}
        setBtnStates={setBtnStates}
        />
    );
});

export default Main;