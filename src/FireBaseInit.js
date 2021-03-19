import firebase from 'firebase'
// npm install --save firebase

let config = {
    apiKey: process.env.REACT_APP_RAPIAPI_API_KEYF,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL ,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET ,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID ,
    appId: process.env.REACT_APP_APPID
}

const fire = firebase.initializeApp(config)

export default fire