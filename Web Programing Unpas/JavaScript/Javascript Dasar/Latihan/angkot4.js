var jmlAngkot = 10,
angkotBeroprasi = 6;

for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

    if(noAngkot <= angkotBeroprasi) {
        console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
    } else if(noAngkot === 8) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.');
    }
    
}

