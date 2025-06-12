import React from "react";
import { celulares } from "../../../data/data";
import CarruselCard from '../../components/CarruselCard/';

const CarruselXMarca = ({ marcaId }) => {
  return (
    <div className="container">
      {celulares.filter(celular => celular.marcaId == marcaId).map(celular => (
          <CarruselCard key={celular.id} celular={celular} />
        ))}
    </div>
  );
};

export default CarruselXMarca;
