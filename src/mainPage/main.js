import React, {Component} from 'react'
import './main.css';

class Main extends Component {
    render () {
        return (
            <div className = "backgroundDiv">
                <div contentEditable = "true" className = "mainPage">
                    I'm here
                </div>
            </div>
        )
    }
}

export default Main