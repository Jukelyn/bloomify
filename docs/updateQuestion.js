document.addEventListener("DOMContentLoaded", function () {
    // Function to update the label text
    function updateLabel() {
        const inputLabel = document.querySelector('label[for="inputField"]');
        const currentTime = new Date();
        const hour = currentTime.getHours();

        // Define an array of labels to cycle through
        const questions = [
            "question 1",
            "question 2",
            "question 3",
            // TODO: Add more question here
        ];

        // Calculate the index based on the current hour
        const labelIndex = hour % questions.length;

        // Set the label text to the selected label
        inputLabel.textContent = questions[labelIndex];
    }

    // Initial label update
    updateLabel();

    // Update the label every hour ( we can change this to each day for "production" later)
    setInterval(updateLabel, 3600000); // 3600000 ms = 1hr
});
