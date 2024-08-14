# Seno, Cosseno e Tangente
from math import cos, sin, tan, radians
ang = float(input('Qual é o ângulo: '))
seno = sin(radians(ang))
coseno = cos(radians(ang))
tangente = tan(radians(ang))
print('O ângulo de {}° tem: \nSeno de {:.2f} \nCoseno de {:.2f}\nTangente de {:.2f}'.format(ang, seno, coseno, tangente))

choise = int(input('1 = seno \n2 = coseno \n3 = tangente \n'))
if choise == 1:
    a = int(input('1 para decobrir a hipotenusa \n2 para descobrir o cateto oposto \n'))
    if a == 1:
        co = float(input('Valor do Cateto oposto: '))
        hi = co / seno
        print('A hipotenusa vale {:.2f}'.format(hi))
    else:
        hi = float(input('Valor da hipotenusa: '))
        co = hi * seno
        print('O cateto oposto vale {:.2f}'.format(co))
if choise == 2:
    a = int(input('1 para descobrir a hipotenusa \n2 para descobrir o cateto adjacente \n'))
    if a == 1:
        ca = float(input('Valor do cateto adjacente: '))
        hi = ca / coseno
        print('A hipotenusa vai valer {:.2f}'.format(hi))
    else:
        hi = float(input('Valor da hipotenusa: '))
        ca = hi * coseno
        print('O cateto adjacente vale {:.2f}'.format(ca))
if choise == 3:
    a = int(input('1 para descobrir o cateto adjacente \n2 para descobrir o cateto oposto \n'))
    if a == 1:
        co = float(input('Valor do cateto oposto: '))
        ca = co / tangente
        print('O cateto adjacente vale {:.2f}'.format(ca))
    else:
        ca = float(input('Valor do cateto adjacente: '))
        co = ca * tangente
        print('O cateto oposto vale {:.2f}'.format(co))
