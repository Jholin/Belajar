let data = [
    79,49,48,74,81,98,87,80,68,80,84,90,70,91,93,82,78,72,70,71,92,31,56,81,74,73,85,51,65,93,83,86,90,35,83,73,74,43,86,88,92,93,76,71,90,72,67,75,80,91,61,72,97,91,88,81,70,74,99,95,80,59,71,77,60,63,83,82,60,67,89,63,76,63,88,70,66,88,79,75
]
// kumpulin data
let datas = data.filter(function(x){
return x > 90 && x < 101;
})

//function untuk memisahkan array

console.log(data.length)
console.log(datas.join('-'))
console.log(datas.length)