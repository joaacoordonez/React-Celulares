import React from "react";
import { celulares } from "../../../data/data";
import CarruselCard from '../../components/CarruselCard/';


const CarruselXId = ({id}) => {
  return (
    <div className="container">
      {celulares.filter(celular => celular.id == id).map(celular => (
          <CarruselCard key={celular.id} celular={celular} />
        ))}
    </div>
  );
};

export default CarruselXId;
