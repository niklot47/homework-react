import React, {useReducer} from "react";

import css from "./App.module.css"

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc1':
            return {...state, count1: ((state.count1++) === 32 ? 1 : state.count1 - 1)}
        case 'dec1':
            return {...state, count1: ((state.count1 - 1) === 0 ? 31 : state.count1 - 1)}
        case 'inc2':
            return {...state, count2: ((state.count2++) === 13 ? 1 : state.count2 - 1)}
        case 'dec2':
            return {...state, count2: ((state.count2 - 1) === 0 ? 12 : state.count2 - 1)}
        case 'inc3':
            return {...state, count3: state.count3++}
        case 'dec3':
            return {...state, count3: state.count3 - 1}
        case 'res':
            return {...state, count1: 31, count2: 12, count3: 2000}
    }
    return state;
}


function App() {

    const [state, dispatch] = useReducer(reducer, {count1: 1, count2: 1, count3: 2000});


    return (
        <div className={css.all}>
            <div className={css.panel}>
                <div className={css.allnumb}>
                    <div className={css.numb1}>
                        <div>{state.count1}</div>
                        <div className={css.btp}>
                            <button onClick={() => dispatch({type: 'inc1'})}>&#11014;</button>
                            <button onClick={() => dispatch({type: 'dec1'})}>&#11015;</button>
                        </div>
                    </div>

                    <div className={css.numb1}>
                        <div>{state.count2}</div>
                        <div className={css.btp}>
                            <button onClick={() => dispatch({type: 'inc2'})}>&#11014;</button>
                            <button onClick={() => dispatch({type: 'dec2'})}>&#11015;</button>
                        </div>
                    </div>

                    <div className={css.numb1}>
                        <div>{state.count3}</div>
                        <div className={css.btp}>
                            <button onClick={() => dispatch({type: 'inc3'})}>&#11014;</button>
                            <button onClick={() => dispatch({type: 'dec3'})}>&#11015;</button>
                        </div>
                    </div>
                </div>
                <div>
                    <button className={css.btn} onClick={() => dispatch({type: 'res'})}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default App;
