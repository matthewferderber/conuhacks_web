import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Firebase from './components/Firebase';
import Swiper from './components/Swiper/Swiper';
import WorkspaceCreator from './components/WorkspaceCreator/WorkspaceCreator';
import WorkspaceList from './components/WorkspaceList/WorkspaceList';
import {BrowserRouter as Router, Route} from 'react-router-dom';

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
                // {this.signedIn() ? <Swiper user={this.firebase.user}/> : "Please sign in"}
        let links;
        if (this.signedIn()) {
            links = [
                (<li><a href="/workspaces"><h2>Workspaces</h2></a></li>),
                (<li><a href="/createworkspace"><h2>Workspace Creator</h2></a></li>)
            ];
        } else {
            links = [
                <li className="login" onClick={this.signIn}><h2>Login</h2></li>
            ]
        }
        return (
            <Router>
                <div className="app">
                    <ul className="toolbar">
                    {links}
                    </ul>
                    <Route path="/workspaces" component={WorkspaceList}/>
                    <Route path="/createworkspace" component={WorkspaceCreator}/>
                    <Route path="/matching" component={Swiper}/>
                    <Route path="/createprofile" component={WorkspaceCreator}/>
                </div>
            </Router>
        )
    }
}

export default App;
