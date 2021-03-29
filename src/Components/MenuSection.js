import React, { Component } from 'react'
import MenuItem from './Components/MenuItem'
import axios from 'axios'

export class MenuSection extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

        let apiURL = 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/item'

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
            <div className="row">
                <div className="col">
                    <div className="card text-center">
                        <h2 className="card-header">{this.type}</h2>
                    </div>
                </div>
                <MenuItem
                    id={this.id}
                    name={this.name}
                    description={this.description}
                />
            </div>

        );
    }
}
export default MenuSection