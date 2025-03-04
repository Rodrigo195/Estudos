import "./App.css";

// 2 - imagem em assets
import night from "./assets/night.jpg";

function App() {
  return (
    <>
      <h1>Avançando em React</h1>
      {/* 1 - imagem em public */}
      <img src="/img.jpg" alt="natureza" />
      {/* 2 - imagem em assets */}
      <img src={night} alt="noite" />
    </>
  );
}

export default App;
