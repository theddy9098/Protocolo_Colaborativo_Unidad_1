const Numeros: number[]=[2,3,6,7,10,12,4,9,5,3];

console.log("Los numeros son: " + Numeros);

console.log("\n ")

for (let i=0; i < Numeros.length; i++){
    if (i % 2 != 0){
        console.log(Numeros [i] = 0 );
    }
}
console.log("\n")

for (let i of Numeros){
    console.log("Los numeros son: " + i );
    
}    
console.log("\n")

for(let i=0; i < Numeros.length; i++){
    Numeros[i] = Numeros[i] * i;    
}

console.log("Los numeros multipliacso son: \n ");
for (let i of Numeros){
    console.log(i);
}