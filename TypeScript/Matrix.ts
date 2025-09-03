const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matriz 3x3:");
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
}

console.log("\nRecorrer la matriz por columnas:");
for (let j = 0; j < matrix[0].length; j++) {
    let fila = "";
    for (let i = 0; i < matrix.length; i++) {
        fila += matrix[i][j]+" ";
    }
    console.log(fila);
}

console.log("\n sumar los elementos de la matriz");
let suma = 0;
for (let i of matrix) {
    for (let j of i) {
        suma += j;
    }
}
console.log("La suma de los elementos de la matriz es: " + suma);