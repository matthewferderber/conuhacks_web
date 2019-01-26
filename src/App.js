import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Firebase from './components/Firebase';
import Swiper from './components/Swiper/Swiper';

class App extends Component {
    constructor(props) {
        super(props);
        this.firebase = new Firebase();
        this.toolbarItems = {type: 'button,' , text: 'GroupEm', id: 0}
    }

    signIn = async () => {
      await this.firebase.signIn();
      this.setState({'user': this.firebase.user});
    }

    signedIn() {
        return this.firebase.user;
    }

    render() {
        return (
            <div className="app">
                <div className="toolbar" onClick={this.signIn}>
                    <div className="login">
                        <h2>Login</h2>
                    </div>
                </div>
                {this.signedIn() ? <Swiper user={this.firebase.user}/> : "Please sign in"}
            </div>
        )
    }
}

export default App;
