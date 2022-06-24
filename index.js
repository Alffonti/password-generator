const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordLength = 15

const passwordEl1 = document.getElementById('password-el1')
const passwordEl2 = document.getElementById('password-el2')
const generatePasswords = document.getElementById('generate-passwords');

generatePasswords.addEventListener('click', function generatePasswords() {
    const passwordOne = generateRandomPassword()
    const passwordTwo = generateRandomPassword()
    passwordEl1.textContent = passwordOne
    passwordEl2.textContent = passwordTwo
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