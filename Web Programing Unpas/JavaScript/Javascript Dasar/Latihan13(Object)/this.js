// this
// var a = 10;
// console.log(window.a);

// // cara 1 - Function Declaration
// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// halo();
// this mengembalikan object Global


// cara 2 - object literal
// var obj = {a : 10, nama : 'Jholin'};
// obj.halo = function() {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
// this mengembalikan object yang bersankutan

// cara 3 - constructor
// function Halo() {
//     console.log(this);
//     console.log('halo');
// }
// var obj1 = new Halo();
// var obj2 = new Halo();
// this mengembalikan object yang baru dibuat




// property adalah var didalam object
// method adalah funct didalam object