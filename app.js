//App.js
//Console.log
console.log('Ini Console.log App.js')

//Alert menampilkan popup ke dalam browser
alert('Hello world')

//Confirm  popup tetapi ada yes dan no
confirm('Yakin akan menghapus kenangan?')

//Variable dalam javascript
//var, let, const
//Jangan gunakan var, gunakan let
//Const untuk value dinamis, kalau untuk const ini teman-teman cukup tau aja
let a = 1
let b = 2
let c = a + b
console.log(c)

//Date() untuk menampilkan tanggal
Date()
//Tampilkan tanggal menggunakan alert
let tanggal = Date()
alert(tanggal)

//DOM (Document Object Model)
document.getElementById('nama').innerHTML = "Yahya Luqman"

//DOM CSS
document.getElementById('nama').style.color = "Blue"
document.getElementById('nama').style.background = "Red"

//Function dalam javascript
//Aku dipanggil di button
//Masukkan di <button onclick="sayHello()">Say Hello</button>
function sayHello(){
    alert('Ini Fuction Javacript')
}

//Javascript Event Listeners 
//Masukkan di <h1 id="click-me">Click Me</h1
let clickme = document.getElementById('click-me')

//Event Listeners
clickme.addEventListener('click', function nama(){
    console.log('coba')
})