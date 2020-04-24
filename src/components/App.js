import React from 'react';
import './App.css';
import Header from './Header';
import KegControl from './KegControl/KegControl';
import DailyKegControl from './DailyKeg/DailyKegControl';


const masterKegList = [
  {
    name: "Keg Name",
    brand: "Keg Brand",
    price: 100,
    alcohol: 5,
    flavor: "Beer"
  },

  {
    name: "Keg Name 2",
    brand: "Keg Brand 2",
    price: 200,
    alcohol: 6,
    flavor: "Beer 2"
  },

  {
    name: "Keg Name 3",
    brand: "Keg Brand 3",
    price: 300,
    alcohol: 7,
    flavor: "Beer 3"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Keg",
      brand: "Keg Brand",
      price: 100,
      alcohol: 5,
      flavor: false,
      masterKegList: masterKegList,
      menuVisibleOnPage: true,
      selectedKeg: null
    };
  }


  render() {
    return (
      <React.Fragment>
        <div id="Header">
          <Header />
        </div>
        <div id="container">
          <div id="KegControl">
            <KegControl masterKegList={this.state.masterKegList} />
          </div>
          <div id="DailyKeg">
            <DailyKegControl masterKegList={this.state.masterKegList} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
