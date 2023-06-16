import MarvelApp from "./components/MarvelApp";
import "./style.css"

function App() {
  return (
    <div className="header">
      <img src="../img/marvel.png" width="300px" alt=""/>
      <h1>MARVEL</h1>
      <MarvelApp />
    </div>
  );
}

export default App;