import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>GITHUB ACTIONS POC from master</h1>
      <p>{process.env.REACT_APP_TEXT || "Github Actions poc"} - By ss aswal</p>
    </div>
  );
}

export default App;
