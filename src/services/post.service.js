import {additionalAxiosService} from "./additional.axios.service";
import additionalUrls from "../constants/additionalUrls";
import urls from "../constants/urls";

export const postService ={
    // getAll: ()=>additionalAxiosService.get(urls.users).then(value => value.data),
    getAll: ()=>additionalAxiosService.get('https://jsonplaceholder.typicode.com/posts').then(value => value.data),
}