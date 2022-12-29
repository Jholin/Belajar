// Tagged Templates
const nama = 'Jholin Ibrahimovic';
const umur = 17;

function highlight(strings, ...values) {
    // parameter strings untuk mengembalikan value strings pada str
    // ...values untuk mengembalikan ekspression/parameter pada str (rest parameter)

    // let result = '';
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`;
    // })
    // return result;
    
    return strings.reduce((result, str, i) => `${result}${str}<span class='hl'>${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun.`;
document.body.innerHTML = str