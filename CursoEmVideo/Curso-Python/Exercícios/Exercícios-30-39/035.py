# Analizando Triângulos
l1 = float(input('Digite o primeiro seguimento: '))
l2 = float(input('Digite o seguindo seguimento: '))
l3 = float(input('Digite o terceiro seguimento: '))
if l1 < l2 + l3 and l2 < l1 + l3 and l3 < l1 + l2:
    print('Esses seguimentos podem formar um triângulo!')
else:
    print('Esses seguimentos não podem formar um triângulo!')
