import Axios from "axios";

const axios = Axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axios;