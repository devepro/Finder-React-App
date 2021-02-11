import React, {Component} from 'react'

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username : '',
            password : '',
            showSuccessMsg: false,
            showfailedMsg: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    loginClicked(){
        if(this.state.username==='admin' && this.state.password==='admin'){
            this.props.history.push("/welcome")
            this.setState({
                showSuccessMsg : true,
                showfailedMsg: false
            })
        }else{
            this.setState({
                showSuccessMsg : false,
                showfailedMsg: true
            })
        }
    }

    render(){
        return (
            <div>
            {this.state.showSuccessMsg && <div>Login Successful</div>}
            {this.state.showfailedMsg &&  <div>Invalid Credentials</div>}
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
            Password: <input type="password" name="password" onChange={this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

export default LoginComponent