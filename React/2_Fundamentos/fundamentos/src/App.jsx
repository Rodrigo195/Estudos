import "./App.css";

// 2 - importando componente
import FirstComponent from "./components/FirstComponent";
import MyComponent from "./components/MyComponent";

// 4 - template expression
import TemplateExpression from "./components/TemplateExpression";

// 5 - hierarquia de componentes

// 6 - Eventos
import Events from "./components/Events";

function App() {
  return (
    // 3 - comentarios
    <>
      {/* 3 - comentario JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
    </>
  );
}

export default App;
