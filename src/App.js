import Card from "./components/Card";
import MarvelApp from "./components/MarvelApp";
import "./style.css"
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MarvelApp />} />
        <Route path="/home/:id" element={<Card/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;