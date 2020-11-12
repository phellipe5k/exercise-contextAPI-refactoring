import React from 'react';
import CarsContext from './CarsContext';

class Provider extends React.Component {
  constructor() {
    super();
    this.handleChangeCar = this.handleChangeCar.bind(this);
    this.state = {
      red: false,
      blue: false,
      yellow: false,
      handleChangeCar: this.handleChangeCar,
    }
  }

  handleChangeCar(color) {
    this.setState({[color]: !this.state[color]})
  }

  render() {
    const { children } = this.props;
    return (
      <CarsContext.Provider value={{ ...this.state }}>
        { children }
      </CarsContext.Provider>
    )
  }
}

export default Provider;
