import React from 'react';
import PropTypes from "prop-types";

function KegDetails(props) {
  return (
    <React.Fragment>
      <h1>This is KegDetails</h1>

      <p>Date of sighting: {props.keg.name}</p>
      <p>Orcas spotted at {props.keg.brand}</p>
      <p>Adult? {props.keg.price}</p>
      <p>Offsprings sighted? {props.keg.alcohol}</p>
      <p>Number of offsprings sighted: {props.keg.flavor}</p>

      {/*       <p>Name: {props.masterKegList[0].name}</p>
      <p>Brand: {props.masterKegList[0].brand}</p>
      <p>Price: {props.masterKegList[0].price}</p>
      <p>Alc/Vol: {props.masterKegList[0].alcohol}%</p>
      <p>Flavor: {props.masterKegList[0].flavor}</p> */}
    </React.Fragment>
  );
}

KegDetails.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcohol: PropTypes.number,
  flavor: PropTypes.string
}

export default KegDetails;