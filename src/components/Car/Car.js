import React from 'react';

import css from "./Car.module.css"
import img from '../../img/car-placeholder.png'

const Car = ({car: {id, model, price, year}, getCarId}) => {
    return (
        <div className={css.car}>
            <div>
                <img src={img} alt="car placeholder" className={css.img}/>
            </div>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={()=>getCarId(id)} n>Delete</button>
        </div>
    );
};

export default Car;