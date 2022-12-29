
// // Bubling Event adalah ketika kita mentrigger event pada card, lalu event pada parent nya ikut ter trigger.

// // contoh bubbling event.
// const closeButton = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

// // Bila kita men-Trigger child dari parent ber-event, secara otomatis parent nya juga ikut ke trigger.

// closeButton.forEach(function(el) {
//     el.addEventListener('click', function(e){
//         e.target.parentElement.remove();
//     });
// });

// // namun bila kita men-Trigger Parent yang memiliki childern ber-event, event childern tidak ter-Trigger. 

// card.forEach(function(cards){
//     cards.addEventListener('click',function(ex) {
//         alert('ok');
//     });
// });

// hal yang terjadi di atas adalah bubbling event

// kita dapat mengakali nya dengan cara dibawah










// pertama kita cari orang tua kandung nya
const container = document.querySelector('.container');

// lalu kita memanfaatkan "Target" dari parent itu
container.addEventListener('click', function(e){
    if(e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
    }
});

container.addEventListener('click', function(e){
    if(e.target.className == 'card') {
        alert('ok');
    }
});