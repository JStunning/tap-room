import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h2>Keg Menu</h2>
        <hr />
        {this.props.masterKegList.map((keg, i) =>
          <Keg
            masterKegList={this.props.masterKegList[i]}
          />
        )}
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.array
};

export default KegControl;