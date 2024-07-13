import { apiHelper } from "../utils/apiHelper";
import api from "./api";

export const postList = (config) => {
    return apiHelper(() => api.get('posts', config));
};