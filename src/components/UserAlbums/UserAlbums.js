import React, {useEffect, useState} from 'react';
import {albumService as albumsService} from "../../services/albums.service";
import {Outlet, useParams} from "react-router-dom";

import Album from "../Album/Album";
import css from "./UserAlbums.service.css"

const UserAlbums = () => {

    let {id}= useParams();
    console.log(id);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getByUserId(id).then(value => setAlbums(value))
    }, [id]);

    return (
        <div>
            <div className={css.ua}>
                {albums.map(album => <Album key={album.id} album={album}/>)}
            </div>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export default UserAlbums;