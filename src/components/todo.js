import React from 'react'

export class Todo extends React.Component{
    render() {
        return(
            <li>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <button onClick={this.props.onClick}>mark</button>
                <button onClick={this.props.onClick}>remove</button>
            </li>
        )
    }
}