import React from 'react'
import './div.css'

export class Div extends React.Component{
    render(){
        return(
            <div class='div' style={this.props.style}></div>
        )
    }
}