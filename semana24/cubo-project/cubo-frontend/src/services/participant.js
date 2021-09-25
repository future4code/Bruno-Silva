import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export const register = (body, clear) => {
    const url = `${BASE_URL}participants/`

    const modifiedBody = {
        firstName: body.firstName,
        lastName: body.lastName,
        participation: Number(body.participation)
    }

    axios.post(url, modifiedBody)
    .then(() => {
        clear();
        window.location.reload();
        alert("Cadastrado com sucesso! :)");
    })
    .catch(() => {
        alert("Ops, ocorreu algum erro! Tente novamente :)");
    });
};