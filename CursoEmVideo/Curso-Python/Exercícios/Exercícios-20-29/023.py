# Separação de número

#num = input('Digite um número entre 0 e 9999: ')
#n = str(num)
#print('Analizando o número {}'.format(num))
#print('Milhar: {}'.format(n[0]))
#print('Centena: {}'.format(n[1]))
#print('Dezena: {}'.format(n[2]))
#print('Unidade: {}'.format(n[3]))

num = int(input('Digite um número entre 0 e 9999: '))
u = num // 1 % 10
d = num // 10 % 10
c = num // 100 % 10
m = num // 1000 % 10
print('Analizando o número {}'.format(num))
print('Unidade: {}'.format(u))
print('Dezena: {}'.format(d))
print('Centena: {}'.format(c))
print('Milhar: {}'.format(m))
