import "./App.css";

// 2 - imagem em assets
import night from "./assets/night.jpg";
import ConditionalRender from "./components/ConditionalRender.jsx";

// 3 - useState
import Data from "./components/Data.jsx";

// 4 - renderização de lista
import ListRender from "./components/ListRender.jsx";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* 1 - imagem em public */}
      <img src="/img.jpg" alt="natureza" />
      {/* 2 - imagem em assets */}
      <img src={night} alt="noite" />
      {/* 3 - useState */}
      <Data />
      {/* 4 - renderização de lista */}
      <ListRender />
      {/* 7 - render conditional */}
      <ConditionalRender />
    </div>
  );
}

export default App;
