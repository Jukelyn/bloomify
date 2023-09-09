const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fd = new FormData(form);
    console.log(fd);
});
