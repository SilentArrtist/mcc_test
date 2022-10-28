import { useState } from "react";
import Main from "./components/Main";
import "./styles/App.css"

function App() {
  const [btnStates,setBtnStates] = useState({
    addState:false,
    removeState:false,
    editState:false,
    resetState:false,
  })
  const btnClick=(value)=>{
    const newState = {addState:false,removeState:false,editState:false,resetState:false}
    if(value==="add"){newState.addState = true;}
    else if(value==="rm"){newState.removeState = true;}
    else if(value==="edit"){ newState.editState = true;}
    else if(value==="reset"){newState.resetState = true;}
    setBtnStates(newState);
  }
  return (
    <div className="App">
      <div className="container">
      <header>TREE</header>
      <main
      style={
        btnStates.addState?{cursor:`context-menu `}
        :btnStates.editState?{cursor:`context-menu`}
        :{cursor:`default`}
    }
      >
        <Main
        btnStates={btnStates}
        setBtnStates={setBtnStates}
        />
      </main>
      <footer>
        <div onClick={()=>btnClick("add")} className="btn addBtn">Add</div>
        <div onClick={()=>btnClick("rm")} className="btn removeBtn">Remove</div>
        <div onClick={()=>btnClick("edit")} className="btn editBtn">Edit</div>
        <div onClick={()=>btnClick("reset")} className="btn resetBtn">Reset</div>
      </footer>
      </div>
    </div>
  );
}

export default App;
