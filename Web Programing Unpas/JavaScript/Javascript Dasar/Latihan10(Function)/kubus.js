    
    // BUATAN PERTAM DAN SENDIRI (Ternyata Sudah lumayab Baik Refactoringnya)
// function kubus( a, b) {
//     var kubus;
//     kubus = ( a * a * a) + ( b * b *b);

//     return kubus;
// }

// alert(kubus(8, 3));


    //  MATERI FUNCTION KUBUS
// function jumblahVolumeDuaKubus(a, b) {
//     var volumeA,
//         volumeB,
//         total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB;
    
//     return total;
// }

//     alert(jumblahVolumeDuaKubus(8, 3));
//     alert(jumblahVolumeDuaKubus(10, 15));



    // MATERI REFACTORING !!
// RUMUS KUBUS TERBAIK !!
function kubus( a, b) {
    return a * a * a +  b * b *b;
}
alert(kubus(8, 3));