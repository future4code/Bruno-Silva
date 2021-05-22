import React from 'react';
import styled from 'styled-components';
// import axios from 'axios';

const NetworkContainer = styled.div`
  background-color: #696969;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class ConnectionBox extends React.Component {
  render() {
    return (
      <NetworkContainer>
        <h3>Conecte-se à outras plataformas!</h3>
        <img src={""}  alt={"facebook"}></img>
      </NetworkContainer>
    );
  }
}
export default ConnectionBox;