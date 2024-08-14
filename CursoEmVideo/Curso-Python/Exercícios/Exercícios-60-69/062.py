# Progressão aritmética com while
first = int(input('Digite o primeiro termo: '))
razão = int(input('Digite a razão: '))
termo = first
cont = 1
total = 0
mais = 10
while mais != 0:
    total = total + mais
    while cont <= total:
        print('{} -->'.format(termo), end='')
        termo += razão
        cont += 1
    print('PAUSA')
    mais = int(input('Quantos termos você quer mostrar a mais? '))
print('Prograssão finalizada com {} termos mostrados'.format(total))
