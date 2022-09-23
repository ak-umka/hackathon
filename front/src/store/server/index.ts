import axios from "axios";

const axiosApiInstance = axios.create({
    baseURL: `http://localhost:3001/api/v0/`
})

axiosApiInstance.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem("token");
        if (token)
            request.headers = {
                "Authorization": "Bearer" + token
            }
        return request;
    },
    error => Promise.reject(error)
)

export default axiosApiInstance;