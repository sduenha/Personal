#Função a fim a partir dos pontos
x0 = int(input('Qual o valor do x0? '))
y0 = int(input('Qual o valor de y0? '))
x1 = int(input('Qual o valor de x1? '))
y1 = int(input('Qual o valor de y1? '))
a = (y1-y0)/(x1-x0)
b = -a * x0 +y0
print(' A função é y = {}x + {}'.format(a,b))