# Gráfico função 2° grau
from math import sqrt
a = int(input('Qual o valor do A? '))
b = int(input('Qual o valor do B? '))
c = int(input('Qual o valor do C? '))

#Descobrindo a concavidade
if a > 0:
    print('O A é maior que ZERO por tanto a concavidade é para cima')
if a < 0:
    print('O A é menor que ZERO por tanto a concavidade é para baixo')

# Descobrindo o ponto de interseção com o eixo Y
x = 0
y = c 
print('O par ordenado da interseção com o eixo Y é ({:.0f}, {:.0f})'.format(x, y))

# Descobrindo o vertice
delta = (b)**2 - 4 * a * c
xv = -b / 2*a
yv = -delta / 4*a
print('O valor do par ordenado do vertice é ({:.0f}, {:.0f})'.format(xv, yv))

# Descobrindo o ponto que intercepta o eixo x
if delta >= 0:
    y = 0
    x1 = (-b + sqrt(delta)) / 2 * a
    x2 = (-b - sqrt(delta)) / 2 * a
    print('Os pares ordernados do ponto que intercepta o eixo x são ({:.0f}, {:.0f}) e ({:.0f}, {:.0f})'.format(x1, y, x2, y))
else:
    print('Não tem os pares ordenados!')