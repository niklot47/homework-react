import React from 'react';
import {useForm} from "react-hook-form";

const DogsForm = ({getFormDate}) => {
    const {handleSubmit, register, reset} = useForm();

    const submit = (date) => {
        date["type"] = 'dog';
        getFormDate(date)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Add Dog: <input type="text" {...register('dog')}/> </label>
                <button>Add</button>
            </form>
        </div>
    );
};

export default DogsForm;