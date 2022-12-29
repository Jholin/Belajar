
for(i = 0; i < 10; i++) {
    var a = '',
        b = '';
    if(i %2 != 0) {
        for(var j = 0; j < (9-i)/2; j++) {
            a += ' '
        }
        for(var k = 0; k < i; k++) {
            b += '*'
        }
        console.log(a + b)
    }
}