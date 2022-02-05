import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {patchCar} from "../../stor";

const EditForm = ({car: {model, price, year}, id}) => {

    const [error, setError] = useState(null);

    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        console.log(data);
        if (data.model === '') {
            setError('Enter model')
        } else if (data.price === '') {
            setError('Enter price')
        } else if (data.year === ''){
            setError('Enter year')
        } else if (data.year < 1990 || data.year > 2022 ){
            setError('Greater than or equal to 1990 and less than or equal to 2022.')
        } else {
            let obj = {id, ...data};
            console.log("edit form\n",obj);
            dispatch(patchCar(obj));
            setError(null)
            reset();
        }
    }

    const [eCar, setECar] = useState({model, price, year});

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                id: {id}
                <div><label>Model: <input type="text" {...register('model')} placeholder={eCar.model}/></label></div>
                <div><label>Price: <input type="number" {...register('price')}  placeholder={eCar.price}/></label></div>
                <div><label>Year: <input type="number" {...register('year')}  placeholder={eCar.year}/></label></div>
                <button>Save</button>
            </form>
            <div>
                {error || <div>{error}</div>}
            </div>
        </div>
    );
}

export default EditForm;