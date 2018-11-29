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
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div className = "" id = "navbarToggle">
                    <ul className = "nav-ul navbar-nav">
                    {/* Make dropdown a separate component and onClick try and match Google Doc CSS */}
                        <li className = "dropdown">
                            <a className = "" href = "#" role ="button" id = "fileDropdown" data-toggle = "dropdown" >File</a>
                            <div className = "dropdown-menu" aria-labelledby = "fileDropdown">
                                <a className = "dropdown-item" href="#">File dropdown</a>
                                <a className = "dropdown-item" href="#">File dropdown</a>
                            </div>
                        </li>
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