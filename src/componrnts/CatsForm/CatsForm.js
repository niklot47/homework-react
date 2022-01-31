import React from 'react';
import {useForm} from "react-hook-form";

const CatsForm = ({getFormDate}) => {
    const {handleSubmit, register, reset} = useForm();

    const submit = (date) => {
        date["type"] = 'cat';
        getFormDate(date)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Add Cat: <input type="text" {...register('cat')}/> </label>
                <button>Add</button>
            </form>
        </div>
    );
};

export default CatsForm;