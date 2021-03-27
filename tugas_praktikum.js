//Alert menampilkan popup ke dalam browser
alert('Selamat Datang di Web Saya')

function waktu() {
//Date() untuk menampilkan tw
let web = new Date();
if (web.getTimezoneOffset() == 0) (a=web.getTime() + ( 7 *60*60*1000))
else (a=web.getTime());
web.setTime(a);

// tampilkan tahun
let tahun= web.getFullYear ();

// tampilkan hari
let hari= web.getDay ();

// tampilkan bulan
let bulan= web.getMonth ();

// tampilkan tanggal
let tanggal= web.getDate ();

//Array() untuk menampilkan hariarray
let hariarray=new Array("Minggu,","Senin,","Selasa,","Rabu,","Kamis,",
"Jum'at,","Sabtu,");

//Array untuk menampilkan bulanarray
let bulanarray=new Array("Januari","Februari","Maret","April","Mei",
"Juni","Juli","Agustus","September","Oktober","Nopember","Desember");

//DOM  dari tanggal
document.getElementById("tanggal").innerHTML = hariarray[hari]+" "+tanggal
+" "+bulanarray[bulan]+" "+tahun;
//DOM untuk element tanggal
document.getElementById('tanggal').style.color = "red"


//DOM dari jam
document.getElementById('jam').innerHTML =  ((web.getHours() < 10) ? "0" : "") 
+ web.getHours() + ":" + ((web.getMinutes() < 10)? "0" : "") + web.getMinutes() 
+ ":" + ((web.getSeconds() < 10)? "0" : "") + web.getSeconds() + (" W.I.B ")
//DOM untuk element jam
document.getElementById('jam').style.color = "yellow"

setTimeout("waktu()", 1000);
  }
  waktu();

function sayHello(){
    alert('Konnichiwa minasan!!')
}

