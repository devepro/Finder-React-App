import React, {Component} from 'react'
import {BrowserRouter  as Router, Route, Switch} from 'react-router-dom'
import ListTodosComponent from '../components/ListTodosComponent'
import LoginComponent from '../components/LoginComponent'
import WelcomeComponent from '../components/WelcomeComponent'
import Header from '../components/Header' 
import Footer from '../components/Footer'
import {data} from '../data.js'

class Todo extends Component {
    render(){
        return (
            <div className="TodoApp">
                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/welcome" component={WelcomeComponent}/>
                        <Route path="/todo" component={() => <ListTodosComponent todos = {data}/>}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        )
    }
}

function ErrorComponent(){
    return <div>Oops! An error occured. Please contact finder support team.</div>
}

export default Todo