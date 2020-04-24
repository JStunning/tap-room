import React from 'react';
import './App.css';
import Header from './Header';
import KegControl from './KegControl/KegControl';


const masterKegList = [
  {
    name: "Keg Name",
    brand: "Keg Brand",
    price: 100,
    alcohol: 5,
    flavor: "Beer"
  },

  {
    name: "Keg Name2",
    brand: "Keg Brand2",
    price: 200,
    alcohol: 6,
    flavor: "Beer2"
  },

  {
    name: "Keg Name3",
    brand: "Keg Brand3",
    price: 300,
    alcohol: 7,
    flavor: "Beer3"
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
      masterKegList: masterKegList
    };
  }
  render() {
    return (
      <React.Fragment>
        <div id="Header">
          <Header />
        </div>
        <div id="KegControl">
          <KegControl masterKegList={this.state.masterKegList} />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
