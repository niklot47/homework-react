import React, {useState} from 'react';

import css from "./Car.module.css"
import img from '../../img/car-placeholder.png'
import {useDispatch} from "react-redux";
import {deleteCarThunk, patchCar} from "../../stor";
import EditForm from "../EditForm/EditForm";

const Car = ({car: {id, model, price, year}}) => {

    const [carToEdit, setCarToEdit] = useState(false);

    const dispatch = useDispatch();

    return (
        <div className={css.car}>
            <div>
                <img src={img} alt="car placeholder" className={css.img}/>
            </div>
            {
                carToEdit ||
                <div>
                    <div>
                        <div>Model: {model}</div>
                        <div>Price: {price}</div>
                        <div>Year: {year}</div>
                    </div>
                    <button onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>
                    <button onClick={() => {
                        setCarToEdit(true);
                    }}>Edit
                    </button>
                </div>
            }
            {
                !carToEdit || <div>
                    <EditForm car={{id, model, price, year}} id={id}/>
                </div>
            }
        </div>
    );
};

export default Car;