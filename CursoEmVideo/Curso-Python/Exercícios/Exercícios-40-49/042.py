# Analizando Triângulos

# != É DIFERENTE
l1 = float(input('Digite o primeiro seguimento: '))
l2 = float(input('Digite o seguindo seguimento: '))
l3 = float(input('Digite o terceiro seguimento: '))
if l1 < l2 + l3 and l2 < l1 + l3 and l3 < l1 + l2:
    print('Esses seguimentos podem formar um triângulo ', end = '' )
    if l1 == l2 and l1 == l3 and l2 == l3:
    #if l1 == l2 == l3
        print('equilátero!')
    elif l1 == l2 or l1 == l3 or l2 == l3:
        print('isósceles!')
    elif l1 != l2 != l3 != l1:
        print('escaleno!')
else:
    print('Esses seguimentos não podem formar um triângulo!')
