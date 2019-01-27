import React, {Component} from 'react'
import styles from './Profile.css';
import { connect } from 'react-firebase';

class Profile extends Component{
    constructor(props) {
    super(props);
    }
    render() {
        return(
            <div class="card">
                <div class="profile">
                    <div class="profile-img">
                    {/* //get picture of user */}
                    </div>
                    <div class="profile-name">
                        <h1>Bongo Cat</h1>
                    </div>
                    <div class="profile-info">
                        School: Concordia University
                        <br />
                        Year: 2nd Year
                        <br />
                        Skills: Java, Javascript, Node.Javascript
                        <br />
                        Interests: Web applications, Backend
                        
                    </div>
                </div>

            </div>
        )
    }
}

export default Profile;