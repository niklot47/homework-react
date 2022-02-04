import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import css from "./Form.module.css"
import {addCar, deleteAll, sortByModel, sortByPrice, sortByYear,} from "../../stor";

const Form = () => {

    const [error, setError] = useState(null);

    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        if (data.model === '') {
            setError('Enter model')
        } else if (data.price === '') {
            setError('Enter price')
        } else if (data.year === '') {
            setError('Enter year')
        } else {
            dispatch(addCar({data}));
            setError(null)
            reset();
        }

    }


    return (
        <div className={css.all}>
            <form onSubmit={handleSubmit(submit)} className={css.form}>
                <label>Model: <input type="text" {...register('model')}/></label>
                <label>Price: <input type="number" {...register('price')}/></label>
                <label>Year: <input type="number" {...register('year')}/></label>
                <button>Save</button>
            </form>
            <div className={css.err}>
                {error || <div>{error}</div>}
            </div>
            <div>
            </div>
            <button onClick={() => dispatch(deleteAll())}>Delete all</button>
            <div className={css.sort}>
                <button onClick={() => dispatch(sortByModel())}>Sort by model</button>
                <button onClick={() => dispatch(sortByPrice())}>Sort by price</button>
                <button onClick={() => dispatch(sortByYear())}>Sort by year</button>
            </div>

        </div>
    );
};

export default Form;