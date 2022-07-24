import React from "react";
// import './App.css'; // css 파일 불러와서 스타일링할 수 있다.
import MyHeader from './MyHeader'; // MyHeader 불러오기

function App() {
  let name = "호두호동";
  
  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  }
  return (
    <div style={style.App}>
      <MyHeader />
        <h2 style={style.h2}>안녕 리액트! {name}</h2>
        <b style={style.bold_text} id="bold_text">React.js</b>
    </div>
  );
}

export default App;
