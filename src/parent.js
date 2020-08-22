import React, { useContext } from 'react';
import usevalue from './valuecontext';
import Child from './child';
import Child2 from './child2';


function Parent()
{
    let pakistan= useContext(usevalue)
    return ( 
        <div>
            <Child></Child>
            <Child2></Child2>
            hello i am parentcomponent
            i know secret value {pakistan}
            <button onClick={()=>{pakistan[1](++pakistan[0])}}>click to change the value</button>
        </div>
    );
}
export default Parent;