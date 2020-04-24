import React from 'react';
import DailyKeg from './DailyKeg';

class DailyKegControl extends React.Component {

  constructor(props) {

    super(props);
  }

  render() {

    return (

      <React.Fragment>
        <DailyKeg masterKegList={this.props.masterKegList} />
      </React.Fragment>
    );
  }

}

export default DailyKegControl; 