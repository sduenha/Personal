from math import sqrt
from time import sleep

continuar = 0

while continuar == 0:
    a:int = int(input('Digite o valor de A: '))
    b = int(input('Digite o valor de B: '))
    c = int(input('Digite o valor de C: '))
    delta =  b**2 -4*a*c

    if delta > 0:
        x1 = (-b + sqrt(delta))/2*a
        x2 = (-b - sqrt(delta))/2*a
        print('O valor de delta é {}'.format(delta))
        print('As raizes são x1 = {} e x2 = {}'.format(x1, x2))
    elif delta == 0:
        x1 = (-b + sqrt(delta))/2*a
        print('O valor de delta é {}'.format(delta))
        print('A raiz é x = {}'.format(x1))
    else:
        print('O valor de delta é {}'.format(delta))
        print('A equação não possui raízes reais')
    sleep(1)
    continuar = int(input('Você deseja continuar?\nSe sim digite 0\nSe não digite 1\n' ))
