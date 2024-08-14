# Quebrando número
from math import trunc
num = float(input('Digite um número: '))
inteiro = trunc(num)
print('O número {} tem a parte inteira {}'.format(num, inteiro))

num = float(input('Digite um valor: '))
print('O valor {} tem a sua porção inteira de {}'.format(num, int(num)))
