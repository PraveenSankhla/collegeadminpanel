import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBGfjrnlrrRwhWWOgQMmFBe23phuwB_-H4",
    authDomain: "collegeproject-27765.firebaseapp.com",
    projectId: "collegeproject-27765",
    storageBucket: "collegeproject-27765.appspot.com",
    messagingSenderId: "858374603707",
    appId: "1:858374603707:web:5836eccf25a6916555ba9e"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;