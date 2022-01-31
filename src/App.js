import React, {useReducer} from "react";

import CatsForm from "./componrnts/CatsForm/CatsForm";
import DogsForm from "./componrnts/DogsForm/DogsForm";
import Cat from "./componrnts/Cat/Cat";
import Dog from "./componrnts/Dog/Dog";

const reducer = (state, action) =>{
    switch (action.type){
        case 'cat':
            console.log(action);
            console.log(action.type+' on reducer.');
            return {...state, cats: state.cats.push(action)}
        case 'dog':
            console.log(action.type+' on reducer.');
            return {...state, dogs: state.dogs.push(action)}
    }
    return state
}

function App() {


    const [state, dispatch] = useReducer(reducer, {cats: [{name: 'bars', type: 'cat'}], dogs: [{name: 'z\'uzya', type: 'dog'}]});

    const getFormData = (date) => {
        console.log(date.type+' on getFormDate.');
        dispatch(date)
    }

    return (
        <div>
            <CatsForm getFormDate={getFormData}/>
            <DogsForm getFormDate={getFormData}/>
            <hr/>

            <div>{state.cats.map(cat => <Cat key={new Date().getTime()} cat={cat}/> )}</div>
            <hr/>
            <div>{state.dogs.map(dog => <Dog key={new Date().getTime()} dog={dog}/> )}</div>
        </div>
    );
}

export default App;
