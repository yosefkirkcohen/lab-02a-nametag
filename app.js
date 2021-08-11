const myInput = document.getElementById('my-input');

const myButton = document.getElementById('my-button');

const yourName = document.getElementById('your-name');

myButton.addEventListener('click', () => {
    yourName.textContent = myInput.value
})