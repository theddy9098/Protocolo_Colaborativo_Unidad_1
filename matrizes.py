Matriz = [[1,2,3],[4,5,6],[7,8,9]]

suma = 0

for Elemento in Matriz:
    for val   in Elemento:
        suma += val

print("La suma de los elementos es:",suma)

print("\n")

for fila in Matriz:
    print(fila)

Matriz[0],Matriz[-1] = Matriz[-1],Matriz[0]

print("\nMatriz despues de intercambiar la primera y ultima fila:\n")

for fila in Matriz:
    print(fila)

