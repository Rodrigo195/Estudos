// 5 - hierarquia de componentes
import MyComponent from "./MyComponent";

// 1 - Criando componentes

const FirstComponent = () => {
  return (
    <div>
      <h2>Meu primeiro componente</h2>
      <MyComponent />
    </div>
  );
};

export default FirstComponent;
