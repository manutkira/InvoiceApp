import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl2DeSlDDDsw43UeQj6itsCAzHjVuwGns",
  authDomain: "invoie-app.firebaseapp.com",
  projectId: "invoie-app",
  storageBucket: "invoie-app.appspot.com",
  messagingSenderId: "637393107295",
  appId: "1:637393107295:web:9b4842301d3e4af0e09eea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app