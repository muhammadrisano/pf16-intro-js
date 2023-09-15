// const hobies = ['goding', 'joging', 'gaming']

// console.log(hobies);

// sort -> digunakan untuk mensorting sebuah nilai

// const myValue = [8, 5, 4, 7, 2, 6, 11];

// console.log(myValue);

// const resultSorting = myValue.sort((a, b)=> b - a)

// console.log(myValue);
// console.log(resultSorting);

// map -> digunakan untuk melakukan looping data array

const hobies = ["goding", "joging", "gaming", "reading"];



// console.log(hobies.length);
// for(let i = 0; i < hobies.length; i++){
//     console.log(`hobi ke ${i + 1} = ${hobies[i]}`);
// }

// hobies.forEach((item, index) => {
//   console.log(`hobi ke ${index + 1} = ${item}`);
// });

// hobies.map((item, index)=>{
//     console.log(`hobi ke ${index + 1} = ${item}`)
// })


// const resultHobies = hobies.map((item, index)=>{
//     return `${index + 1}. ${item}`
// })

// console.log(resultHobies);


// split -> digunakan untuk string untuk memotong string menjadi bentuk array

// text  = saja ingin menjadi programmer => ['saya', 'ingin', 'menjadi', 'programmer'] 

// const text = 'saya ingin menjadi programmer'
// const resultText = text.split(' ')

// console.log(text);
// console.log(resultText);

// reverse -> digunakan untuk array menukar uratan data / nilai didalam array

// const resultReverse = resultText.reverse()

// console.log(resultReverse);

// join -> digunakan untuk array untuk menggabungkan nilai di array menjadi string

// const resultJoin = resultReverse.join(' ')
// console.log(resultJoin);
const text = 'saya ingin menjadi programmer'

const resultText = text.split(' ').reverse().join(' ')

console.log(resultText);