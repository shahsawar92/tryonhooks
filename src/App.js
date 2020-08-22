import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import usevalue from './valuecontext';
import Parent from './parent';

function App() {
  // let value=99;
  let value = useState(39);
  return (
    <usevalue.Provider value={value}>
      <div>
        hello world
        <Parent></Parent>
    


    </div>
    </usevalue.Provider>
   
   
  );
}

export default App;
