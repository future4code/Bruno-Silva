import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../routes/coordinator';

const ErrorPage = () => {
    const history = useHistory();

    return(
        <div>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
        </div>
    );
};

export default ErrorPage;