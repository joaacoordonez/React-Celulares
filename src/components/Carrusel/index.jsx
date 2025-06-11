import React from "react";
import "./carrusel.css";
import { celulares } from "../../../data/data";
import CarruselCard from '../../components/CarruselCard/';


const Carrusel = () => {
  return (
    <div className="container">
      {celulares.map((celular) => (
        <CarruselCard key={celular.id} celular={celular} />
      ))}
    </div>
  );
};

export default Carrusel;
