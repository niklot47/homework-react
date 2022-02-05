import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {patchCar} from "../../stor";
import css from "./EditForm.module.css"

const EditForm = ({car: {model, price, year}, id, edited, cancel}) => {

    const [error, setError] = useState(null);

    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        console.log(data);
        if (data.model === '') {
            setError('Enter model')
        } else if (data.price === '') {
            setError('Enter price')
        } else if (data.year === '') {
            setError('Enter year')
        } else if (data.year < 1990 || data.year > 2022) {
            setError('Greater than or equal to 1990 and less than or equal to 2022.')
        } else {
            data = {...data, model: data.model + "eNk"};
            let obj = {id, data};
            console.log("edit form\n", obj);
            dispatch(patchCar(obj));
            setError(null)
            reset();
            edited({data});
        }
    }

    const [eCar, setECar] = useState({model, price, year});

    return (
        <>
            <form onSubmit={handleSubmit(submit)} className={css.form}>
                <div className={css.info}>
                    <div className={css.err}>
                        {error || <>{error}</>}
                    </div>
                    <label className={css.lbl}>Model: <input type="text" {...register('model')}
                                                             placeholder={eCar.model}/></label>
                    <label className={css.lbl}>Price: <input type="number" {...register('price')}
                                                             placeholder={eCar.price}/></label>
                    <label className={css.lbl}>Year: <input type="number" {...register('year')}
                                                            placeholder={eCar.year}/></label>
                </div>
                <div className={css.btnPnl}>
                    <button className={css.btn} onClick={() => cancel()}>Cancel</button>
                    <button className={css.btn}>Save</button>
                </div>
            </form>
        </>
    );
}

export default EditForm;