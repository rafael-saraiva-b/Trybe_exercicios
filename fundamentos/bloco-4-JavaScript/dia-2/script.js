let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] > array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  console.log(array)

// for(let index = 0; index < numbers.length; index += 1){
//     console.log(numbers[index])
// }

// let somatorio = 0
// for(let index = 0; index < numbers.length; index += 1){
// somatorio=somatorio+numbers[index]
// }
 
// let media = somatorio/numbers.length

// console.log (media)

// if (media > 20) {
//     console.log ("valor maior que 20")
// }else{
//     console.log ("valor menor ou igual a 20")
// }

// let maiorValor = 0

// for(let index = 0; index < numbers.length; index += 1) {
//     if(maiorValor<numbers[index]){
//         maiorValor=numbers[index]
//     }
// }
// console.log (maiorValor)

// let numeroDeImpares = 0
// for(let index = 0; index < numbers.length; index += 1){
//     let testeImpar=numbers[index]%2
//     if(testeImpar===0){
// }else{
//     numeroDeImpares += 1
// }
// }
// if(numeroDeImpares=0){
//     console.log ("nenhum valor ímpar encontrado")
// }else{
// console.log (numeroDeImpares)
//}

// let menorValor = Infinity

// for(let index = 0; index < numbers.length; index += 1) {
//     if(menorValor>numbers[index]){
//         menorValor=numbers[index]
//     }
// }
// console.log (menorValor)

// let array=[]

// for(let index =1; index<=25; index += 1){
//     array.push(index)
// }
// console.log (array)

// for (let index2=0; index2<array.length; index2 += 1){
//     let divisao= array[index2]/2;
//     console.log (divisao)
// }