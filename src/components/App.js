import React from 'react';
import Header from './Header'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Keg",
      brand: "Keg Brand",
      price: 100,
      alcohol: 5,
      flavor: false
    };
  }
  render() {
    return (
      <React.Fragment>
        <div id="Header">
          <Header />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
