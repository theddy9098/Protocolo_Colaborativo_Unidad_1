const Numeros: number[] = [2, 3, 6, 7, 10, 12, 4, 9, 5, 3];

console.log("Los numeros son: " + Numeros);

console.log("\n ")

for (let i = 0; i < Numeros.length; i++) {
    if (i % 2 != 0) {
        Numeros[i] = 0;
    }
}
console.log("\n");

for (let i of Numeros) {
    console.log("Los numeros son: " + i );
    
}    
console.log("\n")

for (let i = 0; i < Numeros.length; i++) {
    Numeros[i] = Numeros[i] * i;    
}

console.log("Los numeros multiplicados son: \n ");
for (let i of Numeros){
    console.log(i);
}


function busquedaLineal(inx: number[], valor: number): number {
    for (let i = 0; i < inx.length; i++) {
        if (inx[i] === valor) {
            return i;
        }
    }
    return -1; 
}


const valorBuscado = 24; 
const resultado = busquedaLineal(Numeros, valorBuscado);

if (resultado !== -1) {
    console.log("El valor "+ valorBuscado +" se encuentra en el índice " + resultado);
} else {
    console.log("El valor" + valorBuscado + "no se encontro ");
}



