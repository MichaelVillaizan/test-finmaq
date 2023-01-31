import './App.css';
import React,{useState} from 'react';

import Table from "./table";




function App() {

const [board,setBoard] = useState();
  
  return (
    <div className="App">
      <header className="App-header">
       
        <Table
        board={board}
        setBoard={setBoard}/>
        
      </header>
    </div>
  );
}

export default App;
