const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordEl = document.getElementById('password-el')
const generatePassword = document.getElementById('generate-password');
const copyBtn = document.querySelector('.btn-copy');
const range = document.getElementById('range')
const rangeOutput = document.getElementById("range-output")
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const number = document.getElementById('number')
const symbol = document.getElementById('symbol')


let passwordLength = range.value

generatePassword.addEventListener('click', function generatePassword() {
    const passwordOne = generateRandomPassword()
    passwordEl.value = passwordOne
})

function getRandomCharacter() {
    const randomIndex = Math.floor( Math.random()*characters.length )
    return characters[randomIndex]
}

function generateRandomPassword() {
    let randomPassword = ''
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()  
    }
    return randomPassword
}

copyBtn.addEventListener('click', function copyPassword() {
    passwordEl.select();  
    navigator.clipboard.writeText(passwordEl.value);
    const originalContent = copyBtn.innerHTML
    copyBtn.innerHTML = "Password copied"
    copyBtn.classList.add("copied");
    setTimeout(() => {
        copyBtn.innerHTML = originalContent
        copyBtn.classList.remove("copied");
    }, 1100);
});


range.addEventListener('click', function () {
    passwordLength = range.value
    rangeOutput.innerHTML = range.value;
    range.oninput = function() {
        rangeOutput.innerHTML = this.value;
      }
})

uppercase.addEventListener('click', function () {
    console.log(uppercase.value)
})

lowercase.addEventListener('click', function () {
    console.log(lowercase.value)
})

number.addEventListener('click', function () {
    console.log(number.value)
})

symbol.addEventListener('click', function () {
    console.log(symbol.value)
})