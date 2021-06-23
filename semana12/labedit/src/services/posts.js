import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export const createPost = (body, clear) => {
    const url = `${BASE_URL}/posts`
    const header = {
        headers: {
            Authorization: `${localStorage.getItem("token")}`
        }
    }

    axios.post(url, body, header)
    .then((res) => {
        clear()
        alert(res.data);
    })
    .catch((err) => {
        alert(err.response.data)
    });
};