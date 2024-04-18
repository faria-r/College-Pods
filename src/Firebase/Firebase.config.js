// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey ,
//   authDomain: process.env.REACT_APP_authDomain ,
//   projectId: process.env.REACT_APP_projectId ,
//   storageBucket: process.env.REACT_APP_storageBucket ,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId ,
//   appId: process.env.REACT_APP_appId
// };

const firebaseConfig = {
  apiKey: "AIzaSyDm9MqkfaWUusNy0TZ7g0vbY72e11Gpr6Y",
  authDomain: "collegepods-d1b1e.firebaseapp.com",
  projectId: "collegepods-d1b1e",
  storageBucket: "collegepods-d1b1e.appspot.com",
  messagingSenderId: "1031546253538",
  appId: "1:1031546253538:web:80a4e8a62b70cc15576ebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app