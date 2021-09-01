import firebase from "@firebase/app";
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCl2DeSlDDDsw43UeQj6itsCAzHjVuwGns",
    authDomain: "invoie-app.firebaseapp.com",
    projectId: "invoie-app",
    storageBucket: "invoie-app.appspot.com",
    messagingSenderId: "637393107295",
    appId: "1:637393107295:web:9b4842301d3e4af0e09eea"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp.firestore()