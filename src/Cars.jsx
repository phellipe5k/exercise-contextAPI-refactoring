// src/Cars.jsx

import PropTypes from 'prop-types';
import React from 'react';
import CarsContext from './Context/CarsContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars() {
  return (
    <CarsContext.Consumer>
     {({red, blue, yellow, handleChangeCar}) => {
       return (
        <div>
        <div>
          <img
            className={red ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => handleChangeCar('red')}
            type="button"
          >
            Move
          </button>
        </div>
        <div>
          <img
            className={blue ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => handleChangeCar('blue')}
            type="button"
          >
            Move
          </button>
        </div>
        <div>
          <img
            className={yellow ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => handleChangeCar('yellow')}
            type="button"
          >
            Move
          </button>
        </div>
      </div>
     )
     }}
    </CarsContext.Consumer>
  );
}


export default Cars;
