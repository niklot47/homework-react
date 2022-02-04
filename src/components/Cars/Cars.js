import React from 'react';

import Car from "../Car/Car";
import  css from './Cars.module.css'

const Cars = ({cars, getCarId}) => {
    return (
        <div className={css.all}>
            {cars.map(car=><Car key={car.id} car={car} getCarId={getCarId}/>)}
        </div>
    );
};

export default Cars;