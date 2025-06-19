import React, { useEffect, useState } from "react";
import "./carruselRand.css";
import { celulares } from "../../../data/data";
import CarruselCard from "../../components/CarruselCard/";

const CarruselRand = () => {
  const [randomCelulares, setRandomCelulares] = useState([]);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const arrayRandoms = [];
    while (arrayRandoms.length < 6) {
      const randomId = getRndInteger(1, 16);
      if (!arrayRandoms.includes(randomId)) {
        arrayRandoms.push(randomId);
      }
    }
    const seleccionados = celulares.filter(celular => arrayRandoms.includes(celular.id));
    setRandomCelulares(seleccionados);
  }, []);

  return (
    <div className="container">
      {randomCelulares.map(celular => (
        <CarruselCard key={celular.id} celular={celular} />
      ))}
    </div>
  );
};

export default CarruselRand;
