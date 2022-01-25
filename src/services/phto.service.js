import {axiosService} from "./axios.service";

import {urls} from "../config/urls";

export const photoService ={
    getByAlbumId: (id)=>axiosService.get(`${urls.photos}?albumId=${id}`).then(value => value.data),
}