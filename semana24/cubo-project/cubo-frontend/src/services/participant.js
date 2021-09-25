import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToFeed } from '../routes/coordinator';

export const register = (body, clear) => {
    const url = `${BASE_URL}/users/login`

    axios.post(url, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        alert("Seja bem-vindo! :)");
    })
    .catch(() => {
        alert("Usuário e/ou senha não encontrados! Tente novamente! :)")
    });
};