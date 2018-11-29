import React, {Component} from 'react'
import './email.css';

class Email extends Component {
    render (){
        return (
            <div>

                <div id = "email" className = "email row">
                    <div className = "col">
                        <i class="fas fa-comment-alt"></i>
                    </div>
                    <div className = "col">
                        <button type="button" className = "btn btn-primary btn-sm"><i class="fas fa-lock"></i><span className = "bold">SHARE</span></button>
                    </div>
                    <div className = "col">
                        <h5>fake.email@gmail.com</h5>
                    </div>
                </div>
                <div id = "replace-email" className = "email">
                    <i class="far fa-envelope"></i>
                </div>
            </div>
        )
    }
}

export default Email;