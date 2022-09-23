import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem("token");
        if (token)
            request.headers = {
                "Authorization": "Bearer" + token
            }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
