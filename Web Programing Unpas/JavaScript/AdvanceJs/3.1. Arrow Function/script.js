// // function Expressiom
// const tampilNama = function (nama) {
//     return `halo ${nama}`;
// }
// console.log(tampilNama('Jholin'));

// const tampilNama = (nama) => { return `Halo ${nama}`; }
// console.log(tampilNama('Jholin'));

// const tampilNama = (nama, waktu) => {
//     return `selamat ${waktu},  ${nama}`;
// }
// console.log(tampilNama('Jholin', 'Malam'));


// implisit return
// const tampilNama = nama =>  `Halo ${nama}`;
// console.log(tampilNama('Jholin'));


// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());


// let mahasiswa = ['Jholin', 'Daddy', 'Randy'];

// let jumblahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumblahHuruf);

// let jumblahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumblahHuruf);

// let jumblahHuruf = mahasiswa.map(nama => ({ nama, jumblahHuruf: nama.length }));
// console.table(jumblahHuruf);



// konsep this pada Srrow Function

// Constructor Function
// const Mahasiswa = function () {
//     this.nama = 'Jholin';
//     this.umur = 17;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// let jholin = new Mahasiswa();

// Arrow function
// const Mahasiswa = function () {
//     this.nama = 'Jholin';
//     this.umur = 17;
//     this.sayHello =  () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// let jholin = new Mahasiswa();


// Object Literal

// Arrow Function  Tidak memiliki konsep this

// const mhs1 = {
//     nama: 'Jholin',
//     umur: 17,
//     sayHello:  () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }



// const Mahasiswa = function () {
//     this.nama = 'Jholin';
//     this.umur = 17;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);

// }

// let jholin = new Mahasiswa();



const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});