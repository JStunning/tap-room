import React from 'react';
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <h1>Keg</h1>

      <p>Name: Keg Name</p>
      <p>Brand: Keg Brand</p>
      <p>Price: 100</p>
      <p>Alc/Vol: 5%</p>
      <p>Flavor: Beer</p>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcohol: PropTypes.number,
  flavor: PropTypes.string
}

export default Keg;