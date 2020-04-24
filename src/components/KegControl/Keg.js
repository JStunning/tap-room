import React from 'react';
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <h1>{props.masterKegList.name}</h1>
      <p>Brand: {props.masterKegList.brand}</p>
      <p>Price: {props.masterKegList.price}</p>
      <p>Alc/Vol: {props.masterKegList.alcohol}%</p>
      <p>Flavor: {props.masterKegList.flavor}</p>
      <p>{props.masterKegList.id}</p>
      <img id="kegImage" src="https://specsonline.com/wp-content/uploads/reload/007289000141.jpg" alt="keg" /><br />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcohol: PropTypes.number,
  flavor: PropTypes.string,
  whenKegClicked: PropTypes.func,
  id: PropTypes.string
}

export default Keg;