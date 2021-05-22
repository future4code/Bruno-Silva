import React from 'react';
import styled from 'styled-components';
// import axios from 'axios';

const HomePageContainer = styled.div`
  background: linear-gradient(to bottom, #7e48e5 0%, #696969 100%);
`

class HomePage extends React.Component {
  render() {
    return (
      <HomePageContainer>
          HomePage
      </HomePageContainer> 
    );
  }
}
export default HomePage;