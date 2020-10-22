import React from 'react';
import './Intro.scss';

const Intro = ({goToMain}) => {
  const clickHandler = () => {
    goToMain();
  };
  
  return (
    <section className='intro-body'>
      <h1 className="title">
        Happy Birthday Victoria<span className="fine-print">Press to enter the BirthdayBash!</span>
      </h1>
      <div onClick={clickHandler} className="skull" title="">
        <div className="decor">
          ☙
        </div>
        <div className="decor">
          ❧
        </div>
        <div className="eyes">
          <div className="eye">
            <div className="symbol">
              ✸
            </div>
          </div>
          <div className="eye">
            <div className="symbol">
              ✸
            </div>
          </div>
        </div>
        <div className="nose"></div>
        <div className="mustache">
          <span>∼ </span><span>∽</span>
        </div>
        <div className="teeth">
          <div className="top">
            <div className="tooth"></div>
            <div className="tooth"></div>
            <div className="tooth"></div>
            <div className="tooth"></div>
          </div>
          <div className="bottom">
            <div className="tooth"></div>
            <div className="tooth"></div>
            <div className="tooth"></div>
            <div className="tooth"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;