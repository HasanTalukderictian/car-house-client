// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsb3b8IUv5nY_Wsh3ytxLuFEoqHvx4klQ",
  authDomain: "car-doctor-7fcd2.firebaseapp.com",
  projectId: "car-doctor-7fcd2",
  storageBucket: "car-doctor-7fcd2.appspot.com",
  messagingSenderId: "586594123215",
  appId: "1:586594123215:web:07e0f745ed65ddb7ed26ba",
  measurementId: "G-5C2JCR7CZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;