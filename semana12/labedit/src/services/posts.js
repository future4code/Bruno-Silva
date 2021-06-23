import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export const createPost = (body, clear) => {
    const url = `${BASE_URL}/posts`;

    const header = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    };

    axios.post(url, body, header)
    .then((res) => {
        clear()
        alert(res.data);
    })
    .catch((err) => {
        alert(err.response.data)
    });
};

export const createComment = (body, clear) => {
    const url = `${BASE_URL}/posts/${localStorage.getItem("postId")}/comments`;

    const header = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    };

    axios.post(url, body, header)
    .then((res) => {
        clear()
        alert(res.data);
    })
    .catch(() => {
        alert("Ops, ocorreu um erro! Tente novamente :)")
    });
};


export const createPostVote = (isPositiveVoted, postInfo) => {
    // const url = `${BASE_URL}/posts/${postInfo.id}/votes`;

    // const header = {
    //     headers: {
    //         Authorization: localStorage.getItem("token")
    //     }
    // };

    // let body = {}

    // if (isPositiveVoted === true ) {
    //     body = {
    //         direction: 1
    //     }
    // } else if (isPositiveVoted === false) {
    //     body = {
    //         direction: -1
    //     }
    // }

    // axios.post(url, body, header)
    // .then((res) => {
    //     console.log(res.data);
    // })
    // .catch(() => {
    //     alert("Ops, ocorreu um erro! Tente novamente :)")
    // });
}

export const changePostVote = (isPositiveVoted, isNegativeVoted) => {
    console.log(isPositiveVoted, isNegativeVoted)

    // const url = `${BASE_URL}/posts/"postId"/votes`;

    // const header = {
    //     headers: {
    //         Authorization: localStorage.getItem("token")
    //     }
    // };

    let body = {}

    if (isPositiveVoted === true ) {
        body = {
            direction: 1
        }
    } else if (isPositiveVoted === false) {
        body = {
            direction: -1
        }
    }

    console.log("changePostVote body", body)

    // axios.post(url, body, header)
    // .then((res) => {
    //     clear()
    //     alert(res.data);
    // })
    // .catch(() => {
    //     alert("Ops, ocorreu um erro! Tente novamente :)")
    // });
}

export const deletePostVote = () => {
    const url = `${BASE_URL}/posts/"postId"/votes`;

    const header = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    };

    console.log("entrei no deletePostVote")


    // axios.post(url, body, header)
    // .then((res) => {
    //     clear()
    //     alert(res.data);
    // })
    // .catch(() => {
    //     alert("Ops, ocorreu um erro! Tente novamente :)")
    // });
}