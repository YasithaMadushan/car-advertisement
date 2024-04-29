import React from 'react';
import { Link } from 'react-router-dom';
import carsData from '../cars.json';

function HomePage() {
  return (
    <div className="container">
        <h1>Ads</h1>
        <div className="row">
            {carsData.map((car, index) => (
                <div className="col-md-4 mb-4" key={index}>
                    <div className="card h-100">
                        <img src={car.image} className="card-img-top" alt={car.model} />
                        <div className="card-body">
                            <h5 className="card-title">{car.model}</h5>
                            <p className="card-text">{car.description}</p>
                            <Link to={`/car/${index}`} className="btn btn-primary">
                            More
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HomePage