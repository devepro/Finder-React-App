import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class WelcomeComponent extends Component{
    render(){
        return (
            <div>
                Hello, Welcome to Finder. To manage your To-do's please click <Link to="/todo">here</Link>
            </div>
        )
    }
}

export default WelcomeComponent