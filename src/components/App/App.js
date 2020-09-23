import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';

const App = () => {
  const [count, setCount] = useState('');

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
  padding: 10px 20px 10px 10px;

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
  align-items: center;
  justify-content: center;
  width: 80%;
`;

const StyledButtons = styled.button`
  background-color: #f5f0e1;
  border: none;
  color: #1e3d59;
  cursor: pointer;
  height: 100px;
  font-family: 'Press Start 2P', cursive;
  font-size: 100px;
  margin: 0px 20px 40px 20px;
  width: 100px;
`;

export default App;
