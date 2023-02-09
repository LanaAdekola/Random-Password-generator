const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let GenEl = document.getElementById("i-1")
let GenP = document.getElementById("Gen-p")
let PenEl = document.getElementById("i-2")
let passwordlength =  15

function getrandom() {
    let random = (Math.floor(Math.random() * characters.length))
    return characters[random]
}
function getpassword() {
    let randompassword = ""
    for (let i = 0; i < passwordlength; i++){
        randompassword += getrandom()
    }
    return randompassword
}
function getrandom2() {
    let random = (Math.floor(Math.random() * characters.length))
    return characters[random]
}
function getpassword2() {
    let randompassword = ""
    for (let i = 0; i < passwordlength; i++){
        randompassword += getrandom2()
    }
    return randompassword
}
  
  
GenP.addEventListener('click', function() {
    GenEl.value = getpassword()
    PenEl.value = getpassword2()
    setTimeout (function() {
        GenEl.value = ""
        PenEl.value = ""
    }, 5000)
    getpassword()
    getpassword2()
   console.log(getpassword())

})