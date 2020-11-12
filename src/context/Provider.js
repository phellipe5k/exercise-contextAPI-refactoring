import React from 'react';
import CarsContext from '../context/CarsContext';

class Provider extends React.Component {
  constructor() {
    super();
    this.handleCars = this.handleCars.bind(this);
    this.handleSignal = this.handleSignal.bind(this);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
        handleCars: this.handleCars,
      },
      signal: {
        color: 'red',
        handleSignal: this.handleSignal,
      }
    }
  }

  handleSignal(color) {
    this.setState({ signal: { ...this.state.signal, color: color } })

  }

  handleCars(color) {
    this.setState({ cars: { ...this.state.cars, [color]: !this.state.cars[color] } })
  }

  render() {
    const { children } = this.props;
    const { cars, signal } = this.state
    return (
      <CarsContext.Provider value={{cars: {...cars}, signal: {...signal}}}>
        { children }  
      </CarsContext.Provider>
    )
  }
}

export default Provider;
