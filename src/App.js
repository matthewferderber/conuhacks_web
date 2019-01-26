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
        this.state = {};
        this.firebase = new Firebase();
        this.toolbarItems = {type: 'button,' , text: 'GroupEm', id: 0}
    }

    signIn = async () => {
      await this.firebase.signIn();
      this.setState({'user': this.firebase.user});
    }

    logOut = async () => {
        await this.firebase.logout();
        this.setState({'user': null});
    }

    componentDidMount() {
        this.firebase.auth.onAuthStateChanged((user) => this.setState({user}));
    }

    render() {
        let links;
        if (this.state.user) {
            links = [
                (<li key="1"><a href="/#/matching"><h2>Matching</h2></a></li>),
                (<li key="2"><a href="/#/workspaces"><h2>Workspaces</h2></a></li>),
                (<li key="3"><a href="/#/createworkspace"><h2>Workspace Creator</h2></a></li>),
                (<li key="4" onClick={this.logOut}><h2>Logout</h2></li>)
            ];
        } else {
            links = [
                <li key="0" className="login" onClick={this.signIn}><h2>Login</h2></li>
            ];
        }
        return (
            <Router>
                <div className="app">
                    <ul className="toolbar">
                    {links}
                    </ul>
                    <Route path="/#/workspaces" component={WorkspaceList}/>
                    <Route path="/#/createworkspace" component={WorkspaceCreator}/>
                    <Route path="/#/matching" render={(props) => <Swiper {...props} user={this.state.user}/>} />
                    <Route path="/#/createprofile" component={WorkspaceCreator}/>
                </div>
            </Router>
        )
    }
}

export default App;
