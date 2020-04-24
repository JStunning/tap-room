import React from 'react';
import PropTypes from "prop-types";

function DailyKeg(props) {
  console.log("masterKegList ", props.masterKegList);
  return (
    <React.Fragment>
      <h2>Keg of the Day</h2>
      <hr />
      <h3>Name:</h3>
      <p>{props.masterKegList[0].name}</p>
      <h3>Brand:</h3>
      <p>{props.masterKegList[0].brand}</p>
      <h3>Keg Image</h3>
      <img id="kegImage" src="https://specsonline.com/wp-content/uploads/reload/007289000141.jpg" alt="keg" />
    </React.Fragment>
  );
}

DailyKeg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};

export default DailyKeg;