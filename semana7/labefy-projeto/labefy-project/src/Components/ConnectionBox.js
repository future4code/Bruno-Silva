import React from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import faceIcon from '../img/facebook-icon.svg';

const NetworkContainer = styled.div`
  background-color: #696969;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FaceBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background-color: #314a96;
  padding: 8px;

  img {
    height: 32px;
    width: 32px;
  }

  span {
    font-size: 24px;
  }

  :hover {
    cursor:pointer;
  }
`

class ConnectionBox extends React.Component {
  render() {
    return (
      <NetworkContainer>
        <h3>Conecte-se à outras plataformas!</h3>
        <FaceBox>
          <img src={faceIcon}  alt={"ícone do facebook"}></img>
          <span>Conecte-se ao Facebook</span>
        </FaceBox>
      </NetworkContainer>
    );
  }
}
export default ConnectionBox;