import './App.css';
import MyHeader from './MyHeader'; // MyHeader 불러오기

function App() {
  let name = "호두호동";
  return (
    <div className="App">
      <MyHeader />
      <header className="App-header">
        <h2>안녕 리액트! {name}</h2>
      </header>
    </div>
  );
}

export default App;
