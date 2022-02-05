import axios from "axios";

import baseURL from "../constants/additionalUrls";

export const additionalAxiosService = axios.create({baseURL});