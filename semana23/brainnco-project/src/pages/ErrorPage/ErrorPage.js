import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../../routes/coordinator';
import { ErrorContainer } from './styled';

const ErrorPage = () => {
    const history = useHistory();

    return(
        <ErrorContainer>
            <h2>404 - Not found!</h2>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
        </ErrorContainer>
    );
};

export default ErrorPage;