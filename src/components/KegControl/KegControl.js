import React from 'react';
import KegList from './KegList';
import KegDetails from './KegDetails';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: props.masterKegList,
      selectedKeg: selectedKeg
    }
    
  }


  render() {
    let currentVisibleState = null;

    if (this.props.selectedKeg != null) {
      console.log("Details should appear!");
      console.log("SELECTED Keg:", this.props.selectedKeg);
      currentVisibleState = <KegDetails keg={this.props.selectedKeg} />
    } else {
      console.log("KegList should appear!");
      currentVisibleState = <KegList masterKegList={this.state.masterKegList} />
    }

    return (
      <React.Fragment>
        {currentVisibleState}
      </React.Fragment>
    );
  }
}

export default KegControl;