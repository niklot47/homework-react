import React from 'react';

import css from "./Photo.module.css"

const Photo = ({photo}) => {

    return (
        <div className={css.photo}>
            <img src={photo.url} alt={photo.title}/>
            <b>{photo.title}</b>
        </div>
    );
};

export default Photo;