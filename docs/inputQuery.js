const form = document.getElementById('formm');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const ans = document.getElementById('ans').value;

    // Call a function to save the data to Firestore
    saveDataToFirestore(ans);
});

function saveDataToFirestore(ans) {
    const db = app.firestore();

    db.collection('answers').add({
        answer: ans,
    })

        .then((docRef) => {
            console.log('Document written with ID: ', docRef.id);
            // Optionally, clear the form after successful submission
            form.reset();
        })
        .catch((error) => {
            console.error('Error adding document: ', error);
        });
}
