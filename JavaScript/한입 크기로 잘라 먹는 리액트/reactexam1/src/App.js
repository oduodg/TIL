import React from "react";
import Counter from "./Counter";
// import './App.css'; // css 파일 불러와서 스타일링할 수 있다.
import MyHeader from './MyHeader'; // MyHeader 불러오기

function App() { 
  return (
    <div>
      <MyHeader/>
      <Counter/>
    </div>
  );
}

export default App;
