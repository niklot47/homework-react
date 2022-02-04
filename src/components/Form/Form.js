import React from 'react';
import {useForm} from "react-hook-form";

import css from "./Form.module.css"

const Form = ({getFormDate, delAll}) => {

    const {handleSubmit, register, reset} = useForm();

    const submit = (data) => {
        getFormDate(data);
        reset();
    }

    return (
        <div className={css.all}>
            <form onSubmit={handleSubmit(submit)} className={css.form}>
                <label>Model: <input type="text" {...register('model')}/></label>
                <label>Price: <input type="text" {...register('price')}/></label>
                <label>Year: <input type="text" {...register('year')}/></label>
                <button>Save</button>
            </form>
            <div>
                <button onClick={()=>delAll()}>Delete all</button>
            </div>
        </div>
    );
};

export default Form;