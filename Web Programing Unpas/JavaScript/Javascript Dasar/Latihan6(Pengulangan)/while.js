// Infinite Loop Hati-Hati
/* while(true) {
    console.log('Hello, World!');
} */




// Menghentikan infinite loop (Pengulangan ditentukan oleh user)
/* var ulang = true;
while(ulang) {
    console.log('Hello, World!');
    ulang = confirm('lagi?');
}*/




// Menghentikan infinite loop (Pengulangan ditentukan oleh program)
var nilaiAwal = 1;
while(nilaiAwal <= 5) {
    console.log('Hello, World! ' + nilaiAwal + 'x')
    nilaiAwal++;
}