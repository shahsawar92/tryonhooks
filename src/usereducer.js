import React from 'react';

const reducer= (state, action)=> {
    switch(action.type){
        case 'increment':
            return state+=1;
        case 'dicrement':
            return state-=1;
        case 'sayname' :
            return "shahsawar"
        
    }
}
export default reducer;