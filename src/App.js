import BgTierra from "./img/bg-tierra.jpg"
import Main from "./components/Main";
import "./App.css";


function App() {
  return (
    <div className="App">
      <img src={BgTierra} alt="bg tierra" />
      <Main />
    </div>
  );
}

export default App;