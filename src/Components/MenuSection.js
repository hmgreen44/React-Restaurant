import React, { Component } from 'react'

export class MenuSection extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="card text-center">
                        <h2 className="card-header">Breakfast</h2>
                    </div>
                </div>
            </div>
        );
    }
}
export default MenuSection