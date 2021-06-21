import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { firstColor, secondColor, thirdColor, fourthColor, fifthColor } from './constants/colors';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
    font: 16px/24px D-DIN-Medium,Arial,Verdana,sans-serif;
    color: ${fifthColor};
    background-color: ${firstColor};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AccessContainer = styled.div`
    height: 640px;
    width: 800px;
    background-color: ${thirdColor};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;  
`

export const FormContainer = styled.div`
  height: 800px;
  width: 800px;
  background-color: ${secondColor};
  opacity: 0.7;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const CoordinatorButton = styled.button`
  height: 48px;
  width: 120px;
  border-radius: 24px;
  background-color: ${fourthColor};

  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`

export const InputForm = styled.input`
  margin: 8px ;
  height: 32px;
  width: 200px;
  text-align: center;

  :hover {
    opacity: 0.8;
  }
`

export const SelectForm = styled.select`
  margin: 8px ;
  height: 32px;
  width: 200px;
  text-align: center;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`