import React from 'react';
import styles from './Questionnaire.css';
import styles from '.App.css';

class Questionnaire extends Component {
    constructor() {

    }

    render() {
        return (
            <div class="card">
                <h1>"Make A Group"</h1>
                <div class="form">
                    <form>
                        <h2>Group Name:</h2><br>
                        <input type="text" name="Group Name"><br>
                    </form>
                </div>
            </div>
        )
    }
}