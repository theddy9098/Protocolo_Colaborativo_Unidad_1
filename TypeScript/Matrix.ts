const matriz: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matriz 3x3:");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
}

console.log("\nRecorrer la matriz por columnas:");
for (let j = 0; j < matriz[0].length; j++) {
    let fila = "";
    for (let i = 0; i < matriz.length; i++) {
        fila += matriz[i][j]+" ";
    }
    console.log(fila);
}

console.log("\n sumar los elementos de la matriz");
let suma = 0;
for (let i of matriz) {
    for (let j of i) {
        suma += j;
    }
}
console.log("La suma de los elementos de la matriz es: " + suma);

console.log("\n intercambiar la primera y la ultima fila de la matriz");
let temp = matriz[0];
matriz[0] = matriz[matriz.length - 1];
matriz[matriz.length - 1] = temp;

for (let i of matriz) {
    console.log(i);
}