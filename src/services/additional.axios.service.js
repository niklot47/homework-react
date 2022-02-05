import axios from "axios";
import additionalURL from "../constants/additionalUrls";

export const additionalAxiosService = axios.create({additionalURL});