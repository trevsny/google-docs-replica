import React from 'react';
import './navbar.css';

class Nav extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {

    //     }
    // }
    render(){
        return(
            <nav className = "navbar">
                <ul>
                    <li>Work?</li>
                    <li>Work 2?</li>
                </ul>
            </nav>
        );

    }
}

export default Nav