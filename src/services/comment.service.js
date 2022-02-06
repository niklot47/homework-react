import {additionalAxiosService} from "./additional.axios.service";
import additionalUrls from "../constants/additionalUrls";
import urls from "../constants/urls";

export const commentsService ={
    // getAll: ()=>additionalAxiosService.get(urls.users).then(value => value.data),
    getAll: ()=>additionalAxiosService.get('https://jsonplaceholder.typicode.com/comments').then(value => value.data),
}