import React, { useContext, useReducer } from 'react';
import usevalue from './valuecontext';
import reducer from './usereducer';

function Child2(){
    let [state, fun]= useReducer(reducer, 49);
return (<div>hello i am child 2 i've number int({state})
    <button onClick={()=>{fun({type:"increment" }) }} >increment</button>
    <button onClick={()=>{fun({type:"dicrement"}) }}>dicrement</button>
    <button onClick={()=>{fun({type:"sayname"}) }}>dicrement</button>
    </div>)
}
export default Child2;