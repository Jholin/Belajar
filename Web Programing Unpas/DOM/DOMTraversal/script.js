
// const closeButton = document.querySelectorAll('.close');
// closeButton.addEventListener('click',function(){
//     const card = document.querySelector('.card');
//     card.remove();

// })


const closeButton = document.querySelectorAll('.close');

// for(let i = 0; i < closeButton.length ; i++) {
//     closeButton[i].addEventListener('click', function(e){
//         // closeButton[i].parentElement.remove();
//         // closeButton[i].parentElement.style.display = 'none';
//         e.target.parentElement.remove();
// })};

closeButton.forEach(function(el) {
    el.addEventListener('click', function(e){
        e.target.parentElement.remove();
    });
});


// Nyoba Dom Traversal
const nama = document.querySelector('.nama');
console.log(nama);
console.log(nama.parentElement); // untuk mengembalikan parent
console.log(nama.parentNode);
console.log(nama.parentElement.parentElement); // untuk mengambil/mengembalikan kakek
console.log(nama.nextSibling); // tidak mengabaikan enter dalam HTML
console.log(nama.nextElementSibling); // lebih baik pakai ini untuk ambil next element
console.log(nama.previousElementSibling);