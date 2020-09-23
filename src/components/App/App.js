import React from 'react';
import styled from 'styled-components';
import './App.css';

const App = () => {
  return (
    <StyledMain>
      <h3>How many people are partying?!</h3>
      <h1>1</h1>
      <StyledButtonContainer>
        <StyledButtons>-</StyledButtons>
        <StyledButtons>+</StyledButtons>
      </StyledButtonContainer>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  align-items: center;
  background-color: #f5f0e1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;

  h1 {
    color: #ff6e40;
    font-family: 'Press Start 2P', cursive;
    font-size: 120px;
  }

  h3 {
    color: #1e3d59;
    font-family: 'Press Start 2P', cursive;
    font-size: 23px;
    margin-top: 20px;
    text-align: center;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
`;

const StyledButtons = styled.button`
  background-color: #f5f0e1;
  border: none;
  color: #1e3d59;
  cursor: pointer;
  height: 100px;
  font-family: 'Press Start 2P', cursive;
  font-size: 100px;
  margin: 0px 30px 40px 30px;
  width: 100px;
`;

export default App;
