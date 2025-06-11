import React, { useState } from "react";
import './carruselCard.css'

const CarruselCelular = ({ celular }) => {
  const [indiceActual, setIndiceActual] = useState(0);

  const mostrarAnterior = () => {
    setIndiceActual((anterior) =>
      anterior === 0 ? celular.fotos.length - 1 : anterior - 1
    );
  };

  const mostrarSiguiente = () => {
    setIndiceActual((anterior) =>
      anterior === celular.fotos.length - 1 ? 0 : anterior + 1
    );
  };

  return (
    <div className="tarjeta">
      <h3>{celular.nombre}</h3>
      <p>{celular.descripcion}</p>
      <p className="precio">${celular.precio}</p>
      <div className="carrusel">
        <button className="flecha izquierda" onClick={mostrarAnterior}>
          &lt;
        </button>
        <img
          src={celular.fotos[indiceActual]}
          alt={celular.nombre}
          className="imagen-carrusel"
        />
        <button className="flecha derecha" onClick={mostrarSiguiente}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CarruselCelular;


