import "./App.css";

// 2 - importando componente
import FirstComponent from "./components/FirstComponent";
import MyComponent from "./components/MyComponent";

// 4 - template expression
import TemplateExpression from "./components/TemplateExpression";

// 5 - hierarquia de componentes

function App() {
  return (
    // 3 - comentarios
    <>
      {/* 3 - comentario JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
    </>
  );
}

export default App;
