import React, { useContext } from 'react';
import usevalue from './valuecontext';

function Child(){
    let pak= useContext(usevalue);

return (<div>hello i am child and i can c the change:
        {pak[0]}
    </div>)
}
export default Child;