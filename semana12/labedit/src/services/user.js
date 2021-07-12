import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToFeed } from '../routes/coordinator';

export const login = (body, clear, history, setLogoutButtonText, setIsLoading) => {
    setIsLoading(true);
    const url = `${BASE_URL}/users/login`

    axios.post(url, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false);
        goToFeed(history);
        setLogoutButtonText("Logout")
        alert("Seja bem-vindo! :)");
    })
    .catch(() => {
        setIsLoading(false);
        alert("Usuário e/ou senha não encontrados! Tente novamente! :)")
    });
};

export const SignUp = (body, clear, history, setLogoutButtonText, setIsLoading) => {
    setIsLoading(true);
    const url = `${BASE_URL}/users/signup`

    axios.post(url, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        goToFeed(history);
        setLogoutButtonText("Logout")
        alert(`Obrigado por se cadastrar, ${body.username}! :)`)
    })
    .catch((err) => {
        setIsLoading(false)
        alert(err.response.data)
    });
};