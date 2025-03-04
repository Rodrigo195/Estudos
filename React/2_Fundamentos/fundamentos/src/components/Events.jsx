import React from "react";

const Events = () => {
  // 7 - evento com função
  const handleClick = () => {
    alert("Executou usando uma função");
  };

  // 8 - Função com renderização
  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso</h1>;
    } else {
      return <h1>Renderizando outra coisa</h1>;
    }
  };

  // return 10 > 2 && <p>Carregando...</p>;

  return (
    <div>
      <div>
        <button
          onClick={() => {
            alert("Disparou um evento");
          }}
        >
          Clique aqui
        </button>
      </div>
      {/* 7 - evento com função */}
      <div>
        <button onClick={handleClick}>Clique aqui, com função</button>
      </div>
      {/* 8 - Função com renderização */}
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
