// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD1iNf3RCd3eOyLv-03RLrzTECLfy_GCVw",
    authDomain: "website-5e8d6.firebaseapp.com",
    projectId: "website-5e8d6",
    storageBucket: "website-5e8d6.appspot.com",
    messagingSenderId: "551232671623",
    appId: "1:551232671623:web:8827ddd1c4c35624070d22",
    measurementId: "G-VKD850Z9E5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export {
    firebaseApp
}
