# Função Quadrática
from math import sqrt

a = int(input('Qual o valor do a? '))
b = int(input('Qual o valor de b? '))
c = int(input('Qual o valor de c? '))
y = int(input('Qual o valor de y? '))
x = int(input('Qual o valor de x?'))
delta = b ** 2 - 4 * a * c 

# Passo 1 - descobrir a concavidade
if a > 0:
    print('A concavidade é para cima')
else:
    print('A concavidade é para baixo')

# Passo 2 - pontos de interseção do eixo y
y = c
print('Os pontos são (0 , {})'.format(y))

# Passo 3 - descobrindo o vértice
xv = -b / 2 * a
yv = -delta / 4 * a
print('Os pontos são ({}, {})'.format(xv, yv))

# Passo 4 - descobrindo o ponto que intercepta o eixo x
if delta > 0:
        x1 = (-b + sqrt(delta))/2*a
        x2 = (-b - sqrt(delta))/2*a
        print('Os pontos são ({}, 0) e ({}, 0)'.format(x1, x2))
elif delta == 0:
    x1 = (-b + sqrt(delta))/2*a
    print('O ponto é ({}, 0)'.format(x1))
else:
    print('A equação não possui raízes reais')

# Passo 5 - descobrindo mais uns negocios se precisar
if xv == x1 or xv == x2:
    x3 = x1 + 1
    x4 = x1 - 1
    y3 = a * x3 ** 2 + b * x3 + c
    y4 = a * x4 ** 2 + b * x4 + c
    print('Os pares ordenados são ({}, {}) e ({}, {})'.format(x3, y3, x4, y4))
