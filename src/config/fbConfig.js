 // Your web app's Firebase configuration
 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 var firebaseConfig = {
    apiKey: "AIzaSyBZRErreoeNhkQHogiqiBNJoiEmc3Qu3Gk",
    authDomain: "mario-plan-ab8d8.firebaseapp.com",
    databaseURL: "https://mario-plan-ab8d8.firebaseio.com",
    projectId: "mario-plan-ab8d8",
    storageBucket: "mario-plan-ab8d8.appspot.com",
    messagingSenderId: "278968901387",
    appId: "1:278968901387:web:b7feee259e105c94954c0e",
    measurementId: "G-43L7M08PK1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  // firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;