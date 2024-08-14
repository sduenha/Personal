# Progressão aritmética
first = int(input('Digite o primeiro termo: '))
razão = int(input('Digite a razão: '))
decimo = first + (10 - 1) * razão
for c in range(first, decimo + razão, razão):
    print('{} '.format(c), end = '=>')
print('ACABOU')


