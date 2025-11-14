import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:${import.meta.env.VITE_PORT_BACKEND}/avaliacao-servico/avaliacao-servico-backend/src/`,
    headers: {
        'Content-Type': 'application/json'
    }
})
export default api;
