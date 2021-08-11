const myInput = document.getElementById('my-input');

const myButton = document.getElementById('my-button');

const yourName = document.getElementById('your-name');

myButton.addEventListener('click', () => {
    yourName.textContent = myInput.value
})

const colorButton = document.getElementById('color-button');

const colorTop = document.getElementsByClassName('top')
console.log(colorTop)
colorButton.addEventListener('click', () => {
    colorTop[0].style.backgroundColor = "blue"
})