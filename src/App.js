import React from 'react';
import './App.css';
import MenuSection from './Components/MenuSection'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuSections: []

    }
  }
  componentDidMount() {
    let apiURL = 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/sections'
    let this_ = this;

    axios.get(apiURL)
      .then(function (response) {
        // handle success
        // console.log(response.data);
        this_.setState({ menuSections: response.data })

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  }
  render() {


    return (
      <div className="App container">
        <div className="row">
          <div className="col text-center mt-5">
            <h1> React Restaurant</h1>
          </div>
        </div>
        { this.state.menuSections.map((menuSection, index) => <MenuSection key={index} id={index} menuSection={menuSection} />)}
      </div>
    );
  }
}


export default App;
