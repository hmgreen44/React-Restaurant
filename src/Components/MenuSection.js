import React, { Component } from 'react'
import MenuItem from './MenuItem'
import axios from 'axios'

class MenuSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuItems: [],
            price: ''
        }
    }
    componentDidMount() {
        //grabbing data from local storage.
        let menuItems = window.localStorage.getItem('menuItems' + this.props.id)
        if (menuItems) {
            this.setState({ menuItems: JSON.parse(menuItems) })
        }
        else {
            // if there is no local storage running axiosHelper will run, as well as an if statement in order to run the axios again on section id 1 (breakfast) in order to show 20 items instead of 10
            this.axiosHelper()
            if (this.props.menuSection.id == 1) {
                this.axiosHelper()
            }
        }
    }
    componentDidUpdate() {
        window.localStorage.setItem('menuItems' + this.props.id, JSON.stringify(this.state.menuItems))
    }
    //added variable called price with a math.random to create a price from 1 to 10
    getPrice() {
        let price = Math.floor((Math.random() * 10)) + 1;
        console.log(price)
        return price;

    }
    axiosHelper() {
        let apiURL = 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/'
        let this_ = this;
        axios.get(apiURL + this.props.menuSection.id)
            .then(function (response) {
                // handle success
                // console.log(response.data);
                let pricedMenu = response.data.map(item => {
                    item.price = this_.getPrice()
                    return item;
                })
                if (this_.props.menuSection.id == 9) {
                    this_.setState({ menuItems: pricedMenu.slice(0, 1) })
                } else {
                    this_.setState({ menuItems:this_.state.menuItems.concat(pricedMenu) })
                }
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
                        <h2 className="card-header">{this.props.menuSection.type}</h2>
                    </div>
                </div>
                { this.state.menuItems.map((menuItem, index) => <MenuItem key={index} menuItem={menuItem} getPrice={this.getPrice} />)}
            </div>

        );
    }
}
export default MenuSection