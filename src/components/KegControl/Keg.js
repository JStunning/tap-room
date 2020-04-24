import React from 'react';
import PropTypes from "prop-types";

function Keg(props) {
  console.log("Keg ", props.masterKegList.id);
  return (
    <React.Fragment>
      <h1>{props.masterKegList.name}</h1>
      <p>Brand: {props.masterKegList.brand}</p>
      <p>Price: {props.masterKegList.price}</p>
      <p>Alc/Vol: {props.masterKegList.alcohol}%</p>
      <p>Flavor: {props.masterKegList.flavor}</p>
      <p>{props.masterKegList.id}</p><br />
      <button onClick={() => props.whenKegClicked(props.masterKegList.id)}>Details</button>
    </React.Fragment>
  );
}

Keg.propTypes = {
  whenKegClicked: PropTypes.func,
  id: PropTypes.string
}

export default Keg;