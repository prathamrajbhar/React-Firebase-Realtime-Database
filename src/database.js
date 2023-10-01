import React from 'react'
import firebase from 'firebase';

const firebaseConfig = {
    // Your Credentials
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export default database