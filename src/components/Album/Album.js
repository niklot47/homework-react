import React from 'react';
import {Link} from "react-router-dom";

import css from "./Album.module.css"

const Album = ({album}) => {

    const {albumId, id, title} = album;

    return (
        <div className={css.alb}>
            <span>
                Album title: {title}
            </span>
            <span>
                <Link to={id + ''}>Show photos</Link>
            </span>
        </div>
    )
}

export default Album;