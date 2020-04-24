import React from 'react';
import PropTypes from "prop-types";

function DailyKegDetails(props) {
  return (
    <React.Fragment>
      <h1>Keg</h1>

      <p>Name: {props.masterKegList[0].name}</p>
      <p>Brand: {props.masterKegList[0].brand}</p>
      <p>Price: {props.masterKegList[0].price}</p>
      <p>Alc/Vol: {props.masterKegList[0].alcohol}%</p>
      <p>Flavor: {props.masterKegList[0].flavor}</p>
    </React.Fragment>
  );
}

DailyKegDetails.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcohol: PropTypes.number,
  flavor: PropTypes.string
}

export default DailyKegDetails;