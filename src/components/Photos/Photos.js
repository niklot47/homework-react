import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {photoService} from "../../services/phto.service";
import Photo from "../Photo/Photo";
import css from "./Photos.module.css"

const Photos = () => {

    const {album, id} = useParams();
    console.log(useParams());

    const [albumM, setAlbumM] = useState([]);

    useEffect(()=>{
        photoService.getByAlbumId(album).then(value => setAlbumM(value))
    },[album])

    return (
        <div className={css.wrap}>
            {
                albumM.map(photo => <Photo key={photo.id} photo={photo}/>)
            }
        </div>
    );
};

export default Photos;