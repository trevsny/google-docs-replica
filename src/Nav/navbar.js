import React from 'react';
import './navbar.css';
class Navbar extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {

    //     }
    // }
    render(){
        return(
            <nav className = "navbar navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className = "collapse navbar-collapse" id = "navbarToggle">
                    <ul className = "nav-ul navbar-nav">
                        <li><a href="#">File</a></li>
                        <li><a href="#">Edit</a></li>
                        <li><a href="#">View</a></li>
                        <li><a href="#">Insert</a></li>
                        <li><a href="#">Format</a></li>
                        <li><a href="#">Tools</a></li>
                        <li><a href="#">Add-ons</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">All changes saved</a></li>  
                    </ul>
                </div>
            </nav>
        );

    }
}

export default Navbar