import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';
import KegDetails from './KegDetails'

class KegControl extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let currentlyVisibleState = null;

    return (
      <React.Fragment>
          <h2>Keg Menu</h2><hr />
          {this.props.masterKegList.map((keg, i) =>
            <>
              <Keg masterKegList={this.props.masterKegList[i]} /><br />
              <button type="button">details</button>
            </>
          )}
          {/* <KegDetails /> */}
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.array
};

export default KegControl;