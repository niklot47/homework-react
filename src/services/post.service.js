import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const PostService={
    getByUser:(id) => axiosService.get(`${urls.posts}?userId=${id}`)
}