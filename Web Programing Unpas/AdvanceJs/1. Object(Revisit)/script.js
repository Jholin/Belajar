// Cara membuat "Object" pada javacript
// 1. Object literal
// let mahasiswa1 = {
//     nama: 'Jholin',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hallo ${this.nama}, selamat makan`);
//     }
// };

// let mahasiswa2 = {
//     nama: 'Doddy',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hallo ${this.nama}, selamat makan`);
//     }
// };





// 2. Function Declaration

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     },

//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain!`)
//     },

//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Hallo ${this.nama}, selamat tidur!`);
//     }
// };

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;


//     return mahasiswa;
// }

// let Jholin = Mahasiswa('Jholin', 10);
// let Daddy = Mahasiswa('Daddy', 20);




// function Mahasiswa(nama, energi) {
    // let mahasiswa = Object.create(methodMahasiswa);
    // let mahasiswa = {};
    // let this = Object.create(Mahasiswa.prototype);
    // this.nama = nama;
    // this.energi = energi;
    // return mahasiswa;
    // return this;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam*2;
//     return `Halo ${this.nama}, selamat tidur!`;
// }

// let jholin = new Mahasiswa('Jholin', 10);





// Versi Class
// class Mahasiswa {
//     constructor(nama,energi) {
//         this.nama = nama;
//         this.energi = energi;
        
//     }

//     makan(porsi) {
//         this.energi += porsi;
//         return `Halo ${this.nama}, selamat makan!`;
//     }

//     main(jam) {
//         this.energi -= jam;
//         return `Halo ${this.nama}, selamat bermain!`;
//     }

//     tidur(jam) {
//         this.energi += jam*2;
//         return `Halo ${this.nama}, selamat tidur!`;
//     }
// }

// let jholin = new Mahasiswa('Jholin', 10);
// let daddy = new Mahasiswa('Daddy', 20);



// let angka = [];
// let angka = new Array();

// function Array() {
//     let this = Object.create(Array.prototype);
// }





// 3. Constructor Function
// keyboard new

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain!`)
//     }

// }

// let jholin = new Mahasiswa(`Jholin`, 10)







// 4. Object.create




