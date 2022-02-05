import {additionalAxiosService} from "./additional.axios.service";
import additionalUrls from "../constants/additionalUrls";
import urls from "../constants/urls";

export const userService ={
    // getAll: ()=>additionalAxiosService.get(urls.users).then(value => value.data),
    getAll: ()=>additionalAxiosService.get('https://jsonplaceholder.typicode.com/users').then(value => value.data),
    // getById: (id)=>additionalAxiosService.get(`${additionalUrls.users}/${id}`).then(value => value.data)
}