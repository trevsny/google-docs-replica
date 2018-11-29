import React, {Component} from 'react'
import './titleDoc.css';
import Email from './email.js';

class TitleDoc extends Component {
    render(){
        return (
            <div className = "row no-gutters">
                <div className = "col-1 file-div">
                    <i className ="file fas fa-file-alt"></i>
                </div>
                <div className = "">
                    <form className = "">
                        <input type = "text" className = "form-control input" placeholder = "Untitled Document"/>
                    </form>
                </div>
                <div className = "icons">
                    {/* Empty star */}
                    <i className ="far fa-star"></i>    
                    <i className = "fas fa-folder"></i>
                    {/* Filled in star */}
                    {/* <i className ="fas fa-star"></i> */}
                    {/* icons for star and folder */}
                </div>
               <Email />
            </div>
        )
    }
}

export default TitleDoc;