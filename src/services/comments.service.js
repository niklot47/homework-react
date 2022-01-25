import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const commentsService = {
    getByPostId: (id)=>axiosService.get(`${urls.comments}?postId=${id}`).then(value => value.data)
}