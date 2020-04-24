import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function KegList(props) {

  console.log("Keg List props ",props)

  return (
    <React.Fragment>
      <h2>Keg List</h2>
      {props.masterKegList.map((keg, i) =>
        <Keg
          masterKegList={props.masterKegList[i]}
          whenKegClicked={props.onKegSelection}
        />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  masterKegList: PropTypes.array,
  whenKegClicked: PropTypes.func,
  key: PropTypes.number
};

export default KegList;