import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Firebase from './components/Firebase';

class App extends Component {
    constructor(props) {
        super(props);
        this.app = new Firebase();
        this.toolbarItems = {type: 'button,' , text: 'GroupEm', id: 0}
    }

    signIn = async () => {
      await this.app.signIn();
      console.log(this.app);
    }

    render() {
        return (
            <div className="toolbar" onClick={this.signIn}>
              <div className="login">
                <h2>Login</h2>
              </div>
            </div>
        )
    }
}

export default App;
