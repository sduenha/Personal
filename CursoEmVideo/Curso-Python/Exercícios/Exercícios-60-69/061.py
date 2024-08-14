# Progressão aritmética com while
first = int(input('Digite o primeiro termo: '))
razão = int(input('Digite a razão: '))
termo = first
cont = 1
while cont <= 10:
    print('{} -->'.format(termo), end='')
    termo += razão
    cont += 1
print('FIM')