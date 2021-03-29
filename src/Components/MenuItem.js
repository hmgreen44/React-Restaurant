import React, { Component } from 'react'
import axios from 'axios'

export class MenuItem extends Component {
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
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>


        )


    }
}

export default MenuItem