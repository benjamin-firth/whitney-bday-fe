import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Intro from '../Intro/Intro';

const App = () => {
  const [count, setCount] = useState('');
  const [isIntro, changeIntro] = useState(true);

  const goToMain = () => {
    changeIntro(!isIntro);
  };

  const getCount = async () => {
    const response = await fetch("https://whitneys-b-day-surprise.herokuapp.com/");
    const initialData = await response.json();
    return initialData.count[0].amount;
  };

  const modifyCount = async (method, info) => {
    let url;
    method === 'PATCH' ? 
      url = "https://whitneys-b-day-surprise.herokuapp.com/count/666" :
      url = "https://whitneys-b-day-surprise.herokuapp.com/count/";

    let options = {
      method,
      body: JSON.stringify(info),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };
  
  const makeNewCount = async (direction) => {
    const newData = () => {
      let newNum;
      if (direction === 'up') {
        newNum = count + 1;
        setCount(count + 1);
      } else {
        newNum = count - 1;
        setCount(count - 1);
      };
      return newNum;
    };

    const newDataToSend = { amount: newData() };

    modifyCount('PATCH', newDataToSend).then(info => console.log(info));
  };

  useEffect(() => {
    getCount().then(info => setCount(info))
  }, []);

  return (
    isIntro ? 
    <Intro goToMain={goToMain} /> : 
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
  background-color: #E74C3D;
  display: flex;
  flex-direction: column;
  height: 98vh;
  justify-content: space-evenly;
  padding: 10px 10px 10px 10px;

  h1 {
    color: #3498DB;
    font-family: 'Press Start 2P', cursive;
    font-size: 170px;
  }

  h3 {
    color: #F1C40F;
    font-family: 'Press Start 2P', cursive;
    font-size: 23px;
    margin-top: 20px;
    text-align: center;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 70px;
  margin-bottom: 25px;
  width: 80%;
`;

const StyledButtons = styled.button`
  background-color: #E74C3D;
  border: none;
  color: #F1C40F;
  cursor: pointer;
  height: 100px;
  font-family: 'Press Start 2P', cursive;
  font-size: 100px;
  margin: 0px 0px 0px 10px;
  width: 100px;
`;

export default App;
