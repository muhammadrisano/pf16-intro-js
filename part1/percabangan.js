// if else
// const UN = 76
// const KKM =65
// 

// if(true){
//     // jika benar
//     console.log('benar....');
// }else{
//     // jika salah
//     console.log('salah....')
// }

// const apakahNilai = UN >= KKM

// console.log(apakahNilai);
// if (UN >= KKM){
//     console.log('selamat anda lulus....')
// }else{
//     console.log('maaf anda belum lulus')
// }
// const UN = 76
// let grade = ''

// if(UN >=90){
//     grade = 'A'
// }else if(UN >= 75){
//     grade = 'B'
// }else if(UN >= 60){
//     grade = 'C'
// }else if(UN >= 50){
//     grade = 'D'
// }else{
//     grade = 'E'
// }

// console.log(grade);

// switch case
// 0-6
const dateNow = new Date('09-04-2023')
// console.log(dateNow.getDay());
const numberDay = 2
let hari = ""


// if(numberDay === 0){
//     hari = 'minggu'
// }else if(numberDay === 1){
//     hari = 'senin'
// }else if(numberDay ===2){
//     hari = 'selasa'
// }

switch(numberDay){
    case 0:
        hari = 'minggu'
        break;
    case 1:
        hari = 'Senin'
        break
    case 2:
        hari = 'Selasa'
        break

   
    case 3:
        hari = "Rabu"
        break
    case 4:
        hari = "Kamis"
        break
    case 5:
        hari = 'Jumat'
        break
    case 6:
        hari = "Sabtu"
        break
    default:
        hari = "anda salah memasukan nilai hari"
}
console.log(hari);



// ternari operator

const nilaiUN = 70
const nilaiKKM = 65

const keterangan =  nilaiUN >= nilaiKKM ? 'LULUS': 'TIDAK LULUS'
console.log(keterangan);

// const grade =   nilaiUN >= 90 ? 'A': 
//                 nilaiUN >= 75 ? 'B': 
//                 nilaiUN >= 60 ? 'C': 
//                 nilaiUN >=50 ? 'D': 'E'

// console.log(grade);


const stock = 3

// let keteranganStock = stock>=5 && 'Product Ready'
const inputPage = ''

const pageNumber =  inputPage || 1
console.log(pageNumber);