import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyClgqCQh2a27Q8tHjPpyYysZDLsOtSxbBE",
  authDomain: "myweekproject.firebaseapp.com",
  databaseURL: "https://myweekproject.firebaseio.com",
  projectId: "myweekproject",
  storageBucket: "myweekproject.appspot.com",
  messagingSenderId: "126741285556",
  appId: "1:126741285556:web:9f7d3130c56e2fbbc765e1"
};
// Initialize Firebase
var fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();