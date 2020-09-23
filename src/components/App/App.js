import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';

const App = () => {
  const [count, setCount] = useState(1);

  
  // const getCount = async () => {
  //   const response = await fetch("https://whitneys-b-day-surprise.herokuapp.com/");
  //   console.log(response);
  //   return response;
  // };
  
  const makeNewCount = (direction) => {
    direction === 'up' ? setCount(count + 1) : setCount(count - 1);

  };

  // useEffect(() => {
  //   getCount();
  // });

  return (
    <StyledMain>
      <h3>How many people are partying?!</h3>
      <h1>{count}</h1>
      <StyledButtonContainer>
        <StyledButtons onClick={() => makeNewCount('down')}>-</StyledButtons>
        <StyledButtons onClick={() => makeNewCount('up')}>+</StyledButtons>
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
