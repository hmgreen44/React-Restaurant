import React from 'react';
import './App.css';
import MenuItem from './Components/MenuItem'
import MenuSection from './Components/MenuSection'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

    let apiURL = 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/sections'

    axios.get(apiURL)
        .then(function (response) {
            // handle success
            console.log(response);
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
        <MenuSection />
        <MenuItem />
      </div>

    );
  }
}


export default App;
