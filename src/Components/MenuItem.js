import React, { Component } from 'react'

export class MenuItem extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted"></h6>
                    <p className="card-text">{this.description}</p>
                    
                </div>
            </div>


        )


    }
}

export default MenuItem