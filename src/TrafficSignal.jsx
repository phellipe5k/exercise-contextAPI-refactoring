// src/TrafficSignal.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSignal } from './redux/actionCreators';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import CarsContext from './context/CarsContext';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

const TrafficSignal = () => {
  return (
    <CarsContext.Consumer>
      {({ cars, signal }) => {
        return (
        <div>
          <div className="button-container">
            <button onClick={() => signal.handleSignal('red')} type="button">
              Red
            </button>
            <button onClick={() => signal.handleSignal('yellow')} type="button">
              Yellow
            </button>
            <button onClick={() => signal.handleSignal('green')} type="button">
              Green
            </button>
          </div>
          <img className="signal" src={renderSignal(signal.color)} alt="" />
        </div>
        )
      }}
    </CarsContext.Consumer>
  );
};

export default TrafficSignal;
