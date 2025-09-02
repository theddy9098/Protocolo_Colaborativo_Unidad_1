Numeros = [1,5,4,3,7,0,6,9,5,8]

for i in Numeros:
    print("los numeros del arreglo son",i) 

print("\n")

valor_buscar = int(input("Ingresa el valor a buscar en el arreglo: "))
encontrado = False

for idx, val in enumerate(Numeros):
    if val == valor_buscar:
        print(f"Valor {valor_buscar} encontrado en la posición {idx}")
        encontrado = True
        break

if not encontrado:
    print(f"Valor {valor_buscar} no encontrado en el arreglo.")


print("\n")


for idx, val in enumerate(Numeros):
    if val % 2 != 0:
        Numeros[idx] = 0

for i in Numeros:
    print("los numeros cambiados son ",i)

print("\n")

for inx, val in enumerate(Numeros):
     resultado = val * inx
     print("El resultado de las multiplicaciones es:",resultado)




