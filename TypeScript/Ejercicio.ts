let arreglos: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arreglos);

function detectar_orden(arr: number[]): string {
    let acd = true;
    let dec = true;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            acd = false;
        }
        if (arr[i] < arr[i + 1]) {
            dec = false;
        }
    }

    if (acd) {
        return "El arreglo está en orden ascendente";
    } else if (dec) {
        return "El arreglo está en orden descendente";
    } else {
        return "El arreglo no está en orden";
    }
}

console.log(detectar_orden(arreglos));

function detectar_progresion(arr: number[]): string {
    if (arr.length < 2) {
        return "El arreglo es demasiado corto para determinar la progresión";
    }

    
    const diferencia = arr[1] - arr[0];
    let esAritmetica = true;
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== diferencia) {
            esAritmetica = false;
            break;
        }
    }

   
    let esGeometrica = true;
    if (arr[0] === 0) {
        esGeometrica = false;
    } else {
        const razon = arr[1] / arr[0];
        for (let i = 1; i < arr.length - 1; i++) {
            if (arr[i] === 0 || arr[i + 1] / arr[i] !== razon) {
                esGeometrica = false;
                break;
            }
        }
    }

    if (esAritmetica) {
        return "El arreglo es una progresión aritmética";
    } else if (esGeometrica) {
        return "El arreglo es una progresión geométrica";
    } else {
        return "El arreglo no es una progresión aritmética ni geométrica";
    }
}

console.log(detectar_progresion(arreglos));