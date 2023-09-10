import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getDownloadURL, getStorage, ref, uploadString } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";
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

initializeApp(firebaseConfig);
const storage = getStorage();
const storageRef = ref(storage, "user_input.txt"); // Define the filename

// Get references to DOM elements
const inputForm = document.getElementById("input-form");
const textInput = document.getElementById("text-input");

// Function to read the existing content of the file (if it exists)
function readExistingContent() {
    getDownloadURL(storageRef)
        .then((url) => {
            const xhr = new XMLHttpRequest();
            xhr.responseType = "text";
            xhr.onload = function () {
                if (xhr.status === 200) {
                    const existingContent = xhr.responseText;
                    // Append the new text input to the existing content
                    const newText = textInput.value;
                    const updatedContent = existingContent + "\n" + newText;
                    // Upload the updated content
                    uploadString(storageRef, updatedContent)
                        .then((snapshot) => {
                            console.log("Text appended and uploaded successfully!");
                        })
                        .catch((error) => {
                            console.error(`Error uploading text: ${error.message}`);
                        });
                } else {
                    // Handle errors when reading the existing content
                    console.error("Error reading existing content.");
                }
            };

            xhr.open("GET", url);
            xhr.send();
        })
        .catch((error) => {
            // If the file doesn't exist, create it with the new text input
            const newText = textInput.value;
            uploadString(storageRef, newText)
                .then((snapshot) => {
                    console.log("Text uploaded successfully!");
                })
                .catch((error) => {
                    console.error("Error uploading text: ${error.message}");
                });
        });
}

// Add an event listener to the form for when it's submitted
inputForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const text = textInput.value; // Get the text from the input field

    if (text.trim() !== "") {
        // Read existing content and then append/upload the new text
        readExistingContent();
        // Clear the input field
        textInput.value = "";
    } else {
        console.error("Please enter some text to append/upload.");
    }
});