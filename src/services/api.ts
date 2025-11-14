import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:${import.meta.env.VITE_PORT_BACKEND}/${import.meta.env.VITE_PATH_BACKEND}/src/`,
    headers: {
        'Content-Type': 'application/json'
    }
})
export default api;
