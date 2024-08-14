# Dobro, Triplo e raiz
n = int(input('Digite um número:'))
d = n * 2
t = n * 3
r = n ** (1/2)
print('O dobro de {} vale {}. \nO triplo de {} vale {}.\nA raíz quadrada de {} é igual a {:.2f}.'.format(n, d, n, t, n, r))

n = int(input('Digite um número:'))
print('O dobro de {} vale {}. \nO triplo vale {}. \nA raíz quadrada é igual a {}'.format(n, n*2, n*3, n**(1/2)))
