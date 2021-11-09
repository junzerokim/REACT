/* eslint-disable */ // warning 제거하고 싶을 때 입력하면 된다.
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '판교 대박 맛집', '카카오커머스']);
  let [좋아요, 좋아요변경] = useState(0);

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
  }

  let posts = '판교 맛집 리스트'
  return (
    <div className="App">
      <div className="black-nav">
        <div>Dev Blog</div>
      </div>
      <button onClick = { 제목바꾸기 } >버튼</button>
      <div className="list">
        <h4> { 글제목[0] } <span onClick={ ()=> { 좋아요변경(좋아요 + 1)}}>👍🏻</span> { 좋아요 } </h4>
        <p>11/7</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { 글제목[1] } </h4>
        <p>11/1</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { 글제목[2] } </h4>
        <p>10/28</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
