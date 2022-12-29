// Desctructuring

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const jumblah = penjumblahanPerkalian(2, 3)[0];
// const perkalian = penjumblahanPerkalian(2, 3)[1];

// const [jumblah, kali] = penjumblahanPerkalian(2, 3);
// console.log(jumblah);
// console.log(kali);

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
// console.log(bagi);

// jika ingin urutan tidak berpengaruh gunakan Object Destructuring

// function kalkulasi (a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {bagi, tambah, kali, kurang} = kalkulasi(2, 3);
// console.log(kurang);


// Destructure function arguments
const mhs1 = {
    nama: 'Jholin Ibrahimovic',
    umur: '17',
    email: 'Jholin04@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 85
    }
}

// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`
}

console.log(cetakMhs(mhs1));