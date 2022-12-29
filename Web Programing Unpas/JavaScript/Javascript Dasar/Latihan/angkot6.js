var jmlAngkot = 10,
angkotBeroprasi = 6;

// for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

//     if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur')
//     } else if( noAngkot <= angkotBeroprasi) {
//         console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.')
//     }
    
// }

for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

    if(noAngkot <= angkotBeroprasi && noAngkot !== 5) {
        console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
    } else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur')
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.')
    }
    
}