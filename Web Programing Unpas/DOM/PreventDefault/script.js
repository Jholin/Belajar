
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

        // Prevent Default mematikan perilaku bawaan dari anchor
        e.preventDefault();
    });
});
