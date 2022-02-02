import React, {useReducer} from "react";

import Form from "./componrnts/Form/Form";
import Cats from "./componrnts/Cats/Cats";
import Dogs from "./componrnts/Dogs/Dogs";
import css from "./App.module.css"


const reduser = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload.cat}]}
        case 'ADD_DOG':
            return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]}
        case 'DEL_CAT':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)}
        case 'DEL_DOG':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)}
        default:
            return state
    }
}


function App() {

    const [{cats, dogs}, dispatch] = useReducer(reduser, {cats: [], dogs: []});
    return (
        <div>
            <div className={css.all}>
                <Form dispatch={dispatch}/>
            </div>
            <hr/>
            <div className={css.all}>
                <div className={css.out}>
                    <Cats cats={cats} dispatch={dispatch}/>
                    <Dogs dogs={dogs} dispatch={dispatch}/>
                </div>
            </div>
        </div>
    );
}

export default App;
