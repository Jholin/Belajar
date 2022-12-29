// Destructuring Variable / Assignment

// Destructuring Array

// const perkenalan = ['Halo', 'nama', 'saya', 'Jholin Ibrahimovic'];
// const salam = perkenalan[0];
// const nama = perkenalan[3];

// const [salam, satu, dua, nama] = perkenalan;

// skippig items
// const [salam, , ,nama] = perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);



// Destructuring Object
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33
// }

// // nama nya gaboleh sembarang, harus sama seperti properti
// const {nama, umur} = mhs;
// console.log(nama)

// Assignment tanpa deklarasi object

// ({nama, umur} = {nama: 'Sandhika Galih', umur: 33});
// console.log(nama);

//Assign ke variabel baru
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33
// }

// const {nama: n, umur: u} = mhs;
// console.log(u);

// Memberikan Default Value
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     email: 'Jholin@gmail.com'
// }

// const {nama, umur, email = 'email@default.com' } = mhs;
// console.log(email)

// Memberi nilai default + assign ke variabel baru

// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     email: 'Jholin@gmail.com'
// }

// const {nama: n, umur: u, email: e = 'email@default.com' } = mhs;
// console.log(e);

// Rest Parameter
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     email: 'Jholin@gmail.com'
// }

// const {nama, ...value} = mhs;
// console.log(value);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'Sandhika Galih',
    umur: 33,
    email: 'Jholin@gmail.com'
}

function getIdMhs({ id }) {
    return id;
}
console.log(getIdMhs(mhs));