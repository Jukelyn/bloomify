import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getDownloadURL, getStorage, ref, uploadString } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";
// https://firebase.google.com/docs/web/setup#available-libraries
// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "${process.env.API_KEY}",
    authDomain: "jukelyn-s-site.firebaseapp.com",
    databaseURL: "https://jukelyn-s-site-default-rtdb.firebaseio.com",
    projectId: "jukelyn-s-site",
    storageBucket: "jukelyn-s-site.appspot.com",
    messagingSenderId: "980268158913",
    appId: "${process.env.APP_ID}",
    measurementId: "G-9P75C95WCP"
};

initializeApp(firebaseConfig);
const storage = getStorage();

// Get references to DOM elements
const inputForm = document.getElementById("input-form");
const textInput = document.getElementById("text-input");

// Add an event listener to the form for when it's submitted
inputForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const text = textInput.value; // Get the text from the input field

    if (text.trim() !== "") {
        // Define a file name for the text content (e.g., user_input.txt)
        const fileName = `user_input_${Date.now()}.txt`;

        // Create a reference to the file in Firebase Storage
        const storageRef = ref(storage, fileName);

        // Upload the text content as a string
        uploadString(storageRef, text).then((snapshot) => {
            console.log("Text uploaded successfully!");
            window.location.href = "submit.html"; // goes to next page

        }).catch((error) => {
            console.error("Error uploading text: ${error.message}");
        });

        // Clear the input field
        textInput.value = "";
    } else {
        console.error("Please enter some text to upload.");
    }
});