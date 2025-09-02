Enteros = [2,4,6,8,10,12,4,9,5,3,7,1]
print(Enteros)


def detecrar_orden(Orden):
    asc = all(Orden[i] <= Orden[i + 1] for i in range(len(Orden) - 1))
    desc = all(Orden[i] >= Orden[i + 1] for i in range(len(Orden) - 1))
    if asc:
     print("El arreglo esta en orden ascendente")
    elif desc:
     print("El arreglo esta en orden descendente")      
    else:
     print("El arreglo no esta ordenado")   
   
detecrar_orden(Enteros)


def detectar_progresion(arr):
    if len(arr) < 2:
        print("No se puede determinar con menos de 2 elementos")
        return
    
    # Verificar progresión aritmética
    d = arr[1] - arr[0]
    es_aritmetica = all(arr[i+1] - arr[i] == d for i in range(len(arr)-1))
    
    # Verificar progresión geométrica (evitar división por cero)
    if arr[0] != 0:
        r = arr[1] / arr[0]
        es_geometrica = all(arr[i+1] / arr[i] == r for i in range(len(arr)-1) if arr[i] != 0)
    else:
        es_geometrica = False
    
    if es_aritmetica:
        print("El arreglo forma una progresión aritmética")
    elif es_geometrica:
        print("El arreglo forma una progresión geométrica")
    else:
        print("El arreglo no forma una progresión")

detectar_progresion(Enteros)
