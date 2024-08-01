//Belajar Metodhe

const str = "Hello Purwadhika"
const strUpper = str.toUpperCase() 
const strLower = str.toLowerCase()
const newStr = str.replace("e","a")
//toUpperCase : mengubah nama pada variable str menjadi besar
//perintah bisa cek di sini : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

console.log(strUpper)
console.log(strLower)
console.log(newStr)

console.log("apel merah".replaceAll("a","o")) //merubah semua huruf a
console.log(str.charAt(4))
console.log("Hello".concat(" World"))

let name = "David"
let message = `Hello, ${name}`

console.log(message)