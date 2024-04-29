import React from 'react';
import { useParams } from 'react-router-dom';
import carsData from '../cars.json';

const CarDetailsPage = () => {
  const { id } = useParams();
  const car = carsData[id];

  return (
    <div className="container">
      <h2>{car.model}</h2>
      <img src={car.image} alt={car.model} width='400px' />
      <p>{car.description}</p>
      <p>Price: {car.price}</p>
      <p>Year: {car.year}</p>
    </div>
  );
};

export default CarDetailsPage;
