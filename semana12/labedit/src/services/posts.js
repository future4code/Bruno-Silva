import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export const createPost = (body, clear, getMethod, setIsLoading) => {
    setIsLoading(true);
    const url = `${BASE_URL}/posts`;

    const header = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    };

    axios.post(url, body, header)
    .then((res) => {
        clear()
        setIsLoading(false)
        alert(res.data);
        getMethod()
    })
    .catch((err) => {
        setIsLoading(false)
        alert(err.response.data)
    });
};

export const createComment = (body, clear, getMethod, setIsLoading) => {
    setIsLoading(true);
    const url = `${BASE_URL}/posts/${localStorage.getItem("postId")}/comments`;

    const header = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    };

    axios.post(url, body, header)
    .then((res) => {
        clear()
        setIsLoading(false);
        alert(res.data);
        getMethod();
    })
    .catch(() => {
        setIsLoading(false);
        alert("Ops, ocorreu um erro! Tente novamente :)")
    });
};


export const createPostOrCommentVote = (postId, valor, postOrComment, getMethod) => {
    const url = `${BASE_URL}/${postOrComment}/${postId}/votes`;

    const header = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    };

    const body = {
        direction: valor
    }

    axios.post(url, body, header)
    .then(() => {
        getMethod();
    })
    .catch(() => {
        alert("Ops, ocorreu um erro! Tente novamente :)");
    });
}

export const changePostOrCommentVote = (postId, valor, postOrComment, getMethod) => {
    const url = `${BASE_URL}/${postOrComment}/${postId}/votes`;

    const header = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    };

    const body = {
        direction: valor
    }

    axios.post(url, body, header)
    .then(() => {
        getMethod();
    })
    .catch(() => {
        alert("Ops, ocorreu um erro! Tente novamente :)")
    });
}

export const deletePostOrCommentVote = (postId, postOrComment, getMethod) => {
    const url = `${BASE_URL}/${postOrComment}/${postId}/votes`;

    const header = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    };

    axios.delete(url, header)
    .then(() => {
        getMethod();
    })
    .catch(() => {
        alert("Ops, ocorreu um erro! Tente novamente :)")
    });
}