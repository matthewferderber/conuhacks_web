import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.toolbarItems = {type: 'button,' , text: 'GroupEm', id: 0}
    }

    render() {
        return (
            <div className = "toolbar" >
              <div className = "login">
                <h2>Login</h2>
              </div>
            </div>
        )
    }
}

export default App;
