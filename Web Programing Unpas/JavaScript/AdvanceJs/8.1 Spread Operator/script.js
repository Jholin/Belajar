// Spread Operator
// memecah iterables menjadi single elements

// const mhs = ['Sandhika', 'Doddy', 'Erik'];
// console.log(...mhs[0]);

// Menggabungkan 2 array
// const mhs = ['Sandhika', 'Doddy', 'Erik'];
// const dosen = ['Ade', 'Hendra', 'Wanda'];
// const orang = [...mhs, 'Aji', ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);


// meng-copy array
// const mhs = ['Sandhika', 'Doddy', 'Erik'];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs);

// const liMhs = document.querySelectorAll('li');
// console.log(liMhs[0].textContent);
// const mhs = [];
// for(let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs)
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);


const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
