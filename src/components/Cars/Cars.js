import React from 'react';
import {useSelector} from "react-redux";

import Car from "../Car/Car";
import  css from './Cars.module.css'

const Cars = () => {

    const {cars} = useSelector(state=>state['carReducer']);

    return (
        <div className={css.all}>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;