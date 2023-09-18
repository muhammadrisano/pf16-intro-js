const printOddNumber = (num) =>{
    // logic
}

printOddNumber(7)
// output:
// 1
// 3
// 5
// 7
printOddNumber(4)
// output:
// 1
// 3

// soal 2
const printPijarCamp =(num)=>{

}


printPijarCamp(15)
// output
/*
1
2
pijar
4
camp
pijar
dan seterusnya
14
pijar camp
*/

// soal 3
// const hob
const hobies1 = ['ngoding, joging', 'gaming']
const hobies2 = ['reading', 'writing', 'swimming']
const combineArray = (data1, data2) =>{
    // spread operator
    const result = [
        ...data1,
        ...data2
    ]
    return result
}

const combinedArray = combineArray(hobies1, hobies2)

console.log(combinedArray);

// const combineObjects = (data1, data2)=>{
// // logic
//     return //nilai object yg sudah tergabung 
// }
// const obj1 = {}
// const obj2 = {}
// const combinedObjects = combineObjects(obj1, obj2)
// console.log(combinedObjects);

