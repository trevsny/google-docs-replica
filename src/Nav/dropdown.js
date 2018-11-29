import React, {Component} from 'react';
import './dropdown.css';

class Dropdown extends Component {
    // Need a constructor 
    // Use props to pass in div id and aria-labelledby and text of dropdowns
    // May need a dropdown text component?
    render(){
        return (
            <div className = "dropdown" id = "dropdownMenuLink" data-toggle = "dropdown" aria-haspopup="true" aria-expanded="false">
                <div className = "dropdown-menu" aria-labelledby = "dropdownMenuLink">
                    {/* a tags go in here */}
                </div>
            </div>
        )
    }
}

export default Dropdown;