import {axiosService} from "./axios.service";

import {urls} from "../config/urls";

export const albumService ={
    // getByUserId: (id)=>axiosService.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`).then(value => value.data),
    getByUserId: (id)=>axiosService.get(`${urls.albums}?userId=${id}`).then(value => value.data),
    getById: (id)=>axiosService.get(`${urls.albums}/${id}`).then(value => value.data)
}