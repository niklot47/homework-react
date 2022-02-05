import React, {useState} from 'react';

import css from "./Car.module.css"
import img from '../../img/car-placeholder.png'
import {useDispatch} from "react-redux";
import {deleteCarThunk, patchCar} from "../../stor";
import EditForm from "../EditForm/EditForm";


const Car = ({car: {id, model, price, year}}) => {

    const [carToEdit, setCarToEdit] = useState(false);
    const [carInfo, setCarInfo] = useState({model, price, year});

    const cancel = () => {
        setCarToEdit(false);
    }

    const edited = ({data}) => {
        setCarInfo({...data})
        cancel();
    }
    const dispatch = useDispatch();

    return (
        <div className={css.car}>
            <div>
                <img src={img} alt="car placeholder" className={css.img}/>
            </div>
            {
                carToEdit ||
                <>
                    <div>
                        <div>Model: {carInfo.model}</div>
                        <div>Price: {carInfo.price}</div>
                        <div>Year: {carInfo.year}</div>
                    </div>
                    <div className={css.btnPnl}>
                        <button className={css.btn} onClick={() => setCarToEdit(true)}>Edit</button>
                        <button className={css.btn} onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>
                    </div>
                </>
            }
            {
                !carToEdit || <div>
                    <EditForm car={{id, model, price, year}} id={id} edited={edited} cancel={cancel}/>
                </div>
            }
        </div>
    );
};

export default Car;