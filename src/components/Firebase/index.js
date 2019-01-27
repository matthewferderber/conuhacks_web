import * as firebase from 'firebase';
import TestData from './TestData';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
    constructor() {
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.provider = new firebase.auth.GoogleAuthProvider();
        this.provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    }

    async createTestData() {
        const workspaces = await firebase.database().ref('workspaces').once('value');
        if(!workspaces.exists()) {
            TestData(firebase);
        }
    }

    async signIn() {
        try {
            const result = await this.auth.signInWithPopup(this.provider);
            this.token = result.credential.accessToken;
            this.user = result.user;
            const u = await firebase.database().ref('users/' + this.user.uid).once('value');

            // create user if this is the first sign in
            if (!u.exists()) {
                firebase.database().ref('users/' + this.user.uid).set({
                    email: this.user.email, 
                    name: this.user.displayName, 
                    matches: [], 
                    accepts: [], 
                    rejects: []
                });
            }
        } catch (err) {
            console.error(err);
        }
    }

    async logout() {
        try {
            await this.auth.signOut();
        } catch (err) {
            console.error(err);
        }
    }
}


export default Firebase;