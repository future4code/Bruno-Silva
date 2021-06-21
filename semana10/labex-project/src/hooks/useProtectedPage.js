import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useProtectedPage = () => {
    const history = useHistory();
    const token = localStorage.getItem("token");

    useLayoutEffect(() => {
        if (!token) {
            history.push("/login");
        };
    }, [history])
};

export default useProtectedPage;