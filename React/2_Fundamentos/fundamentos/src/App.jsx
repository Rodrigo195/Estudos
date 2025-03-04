import "./App.css";

// 2 - importando componente
import FirstComponent from "./components/FirstComponent";

// 4 - template expression
import TemplateExpression from "./components/TemplateExpression";

function App() {
  return (
    // 3 - comentarios
    <>
      {/* 3 - comentario JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />

      <TemplateExpression />
    </>
  );
}

export default App;
