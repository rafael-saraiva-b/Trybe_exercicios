let soma = 0
for(let index=1; index<=50; index +=1){
   soma = soma + index
}
console.log("a soma de 1 a 50 é:", soma,".")



let contador=0
for (let index2=2; index2 <=150; index2 +=1){
    if(index2%3===0){
        contador +=1
    }
}
if(contador===50){
console.log("mesagem secreta")
}




let idadeNat=1
let idadeRenan=2
let idadeSincero=21

if(idadeNat<idadeRenan && idadeNat<idadeSincero){
    console.log ("Nat mais nova")
}else if(idadeRenan<idadeSincero){
    console.log ("Renan mais novo")
}else{
    console.log ("Sincero mais novo")
}
