import React, {Component} from 'react'
import TitleDoc from './titleDoc';
import Navbar from './navbar';
import './navHeader.css';

class NavHeader extends Component {
    render(){
        return (
            <div className = "border">
                <TitleDoc />
                <Navbar />
            </div>
        )
    }
}

export default NavHeader;