import React, { Component } from 'react'
import MenuItem from './MenuItem'
import axios from 'axios'

class MenuSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuItems: []
        }
    }
    componentDidMount() {
        let apiURL = 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/'
        let this_ = this;
        let menuItems = window.localStorage.getItem('menuItems' + this.props.id)
        if (menuItems) {
            this.setState({ menuItems: JSON.parse(menuItems) })
        }
        else {
           
        axios.get(apiURL + this.props.menuSection.id)
            .then(function (response) {
                // handle success
                // console.log(response.data);
                this_.setState({ menuItems: response.data })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        }
    }
    componentDidUpdate() {
        window.localStorage.setItem('menuItems'+ this.props.id, JSON.stringify(this.state.menuItems))
    }
    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="card text-center">
                        <h2 className="card-header">{this.props.menuSection.type}</h2>
                    </div>
                </div>
                { this.state.menuItems.map((menuItem, index) => <MenuItem key={index} menuItem={menuItem} />)}
            </div>

        );
    }
}
export default MenuSection