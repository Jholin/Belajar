// 2.1 EXECUTION CONTENT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'Jholin';

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting (mengerek bendara/ menaikan bendera)
// window = global object
// this = window

// execution phase
 
// console(sayHello());

// var nama = 'jholin';
// var umur = 33;


// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat local Execution Context
// yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting local


// var nama = 'Jholin Ibrahimovic'
// var username =  '@_Jholin';

// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/'
//     return instagramURL + username;
// }

// console.log(cetakURL('@daddy'));

// function a(){
//     console.log('ini a');

//     function b(){
//         console.log('ini b');

//         function c(){
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a();















function satu(){
    var nama = 'Jholin';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Daddy';
satu();
dua('Ibra');
console.log(nama);