import app from 'firebase/app';

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
        app.initializeApp(config);
        this.auth = app.auth();
        this.provider = new app.auth.GoogleAuthProvider();
        this.provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    }

    async signIn() {
        try {
            const result = await this.auth.signInWithPopup(this.provider);
            this.token = result.credential.accessToken;
            this.user = result.user;
        } catch (err) {
            console.error(err);
        }
    }
}


export default Firebase;