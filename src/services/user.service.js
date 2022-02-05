import {additionalAxiosService} from "./additional.axios.service";
import {urls} from "../constants/additionalUrls";

export const userService ={
    getAll: ()=>additionalAxiosService.get(urls.users).then(value => value.data),
    getById: (id)=>additionalAxiosService.get(`${urls.users}/${id}`).then(value => value.data)
}