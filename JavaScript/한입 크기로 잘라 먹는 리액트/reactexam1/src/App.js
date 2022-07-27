import React from "react";
import Container from "./Container";
import Counter from "./Counter";
// import './App.css'; // css 파일 불러와서 스타일링할 수 있다.
import MyHeader from './MyHeader'; // MyHeader 불러오기

function App() { 

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  }
  return (
    <Container>
      <div>
        <MyHeader/>
        <Counter {...counterProps}/>
      </div>
    </Container>
  );
}

export default App;
