// 1. HTML Framents
// const mhs = {
//     nama: 'Jholin Ibrahimovic',
//     umur: 17,
//     nrp: '043040023',
//     email: 'jholin04@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span>${mhs.nrp}</span>
// </div>`;


// 2. Looping
// const mhs = [
//     {
//         nama: 'Jholin Ibrahimovic',
//         email: 'jholin04@gmail.com'
//     },
//     {
//         nama: 'Daddy',
//         email: 'daddy@gmail.com'
//     },
//     {
//         nama: 'Randy',
//         email: 'randy@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`


// 3. conditionals
// tenary
// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Isyana Sarasvati',
    // feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`

// 4. Nested
// HTML Fragment Bersarang

const mhs = {
    nama: 'Jholin Ibrahimovic',
    smester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemograman Sistem Interaktif ',
        'Perancangan Sistem Berorientasi Object'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="smester">Smester : ${mhs.smester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;