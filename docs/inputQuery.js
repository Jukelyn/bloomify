import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getStorage, ref, uploadString } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";
// https://firebase.google.com/docs/web/setup#available-libraries
// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: "${process.env.API_KEY}",
    apiKey: "AIzaSyDTjZc234GAMzUgXlk5gTISANWyaOhT7Jc",
    authDomain: "jukelyn-s-site.firebaseapp.com",
    databaseURL: "https://jukelyn-s-site-default-rtdb.firebaseio.com",
    projectId: "jukelyn-s-site",
    storageBucket: "jukelyn-s-site.appspot.com",
    messagingSenderId: "980268158913",
    // appId: "${process.env.APP_ID}",
    appId: "1:980268158913:web:717628d0946324733ae940",
    measurementId: "G-9P75C95WCP"
};

const app = initializeApp(firebaseConfig);
// Create a root reference
const storage = getStorage();
const storageRef = ref(storage, 'user_inputs.txt');
const answer = 'This is my message.'; // this should be the user input
uploadString(storageRef, answer).then((snapshot) => {
    console.log('Uploaded a raw string!');
});