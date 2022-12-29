// DOM Selection
// document.getElementById()
// document.getElementsByTagName()

// 2 method diatas adalah method paling cepat daripada method dibawah

// document.getElementsByClassName()

// // document.querySelector() -> element
// // (menanyakan selector CSS)
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// // const p = document.querySelector('p');
// // p.innerHTML = 'Ini diubah melalui javascript';
// //  yang dikembalikan hanya element yang pertamakali ditemukan saja

// // document.querySelectorAll()
// const p = document.querySelectorAll('p');

// for(let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'Orange';

// const instagram = document.getElementsByTagName('a');
// instagram[0].style.fontSize = '3vw';