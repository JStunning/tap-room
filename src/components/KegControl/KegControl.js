import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';
import KegDetails from './KegDetails';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <React.Fragment>
        <h2>Keg Control</h2>
        <hr />
        {this.props.masterKegList.map((keg, i) =>
          <Keg
            masterKegList={this.props.masterKegList[i]}
            whenKegClicked={this.props.onKegSelection}
          />
        )}
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.array,
  whenKegClicked: PropTypes.func
};

export default KegControl;