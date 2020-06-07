// libs
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// config
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
