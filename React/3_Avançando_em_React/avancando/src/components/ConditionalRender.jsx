import React from "react";

const ConditionalRender = () => {
  const x = true;

  const name = "Rodrigo";

  return (
    <div>
      {/* 7 - render conditional */}
      <h3>Isso será exibido?</h3>
      {x && <p>Se x for true sim!</p>}
      {/* 8 - else */}
      {name === "Rodrigo" ? (
        <div>
          <p>Olá Rodrigo</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
