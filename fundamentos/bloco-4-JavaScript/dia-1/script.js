// let currentHour = 15
// let message

// if (currentHour >= 22) {
//     message= "Não deveríamos comer nada, é hora de dormir"
// }
// else if (currentHour >=18 && currentHour < 22) {
//     message= "Rango da noite, vamos jantar :D"
// }
// else if (currentHour>=14 && currentHour<18) {
//     message= "Vamos fazer um bolo pro café da tarde?"
// }
// else if (currentHour>=11 && currentHour<14) {
//     message= "Hora do almoço!!!"
// }
// else if (currentHour>=4 && currentHour<11) {
//     message= "Hmmm, cheiro de café recém passado"
// }

// console.log (message)

let a = 90
let b = 45
let c = 45

// console.log ("operacoes")
// console.log (a+b)
// console.log (a-b)
// console.log (a*b)
// console.log (a/b)
// console.log (a%b)

// console.log ("maior de 2")
// if (a>b){
//     console.log (a)
// }else{
//     console.log (b)
// }

console.log ("maior de 3")

if (a>b){
    if(a>c){
        console.log(a)
    }else{
     if(b>c){
        console.log (b)
     }else{
          console.log (c)
        }
    }
}else{
    if(b>c){
        console.log (b)
     }else{
          console.log (c)
        }
}

if(a>0){
    console.log("positive")
}else if(a<0){
    console.log("negative")
}else {
    console.log("zero")
}

if(a+b+c===180){
    console.log("true")
}else{
    console.log("false")
}
