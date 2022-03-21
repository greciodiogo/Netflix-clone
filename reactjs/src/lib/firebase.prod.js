import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {seedDatabase} from '../seed'

//we need to somehow seed the database

//we need a config here
const config = {};

const firebase = Firebase.initializeApp(config);
//seedDatabase(firebase);
export { firebase };
