# Multiplas alternativas com dois valores 
num1 = int(input('Primeiro valor: '))
num2 = int(input('Segundo valor: '))
choice = 0
while choice != 5:
    print('Escolha uma das opções: ')
    print('[1] soma')
    print('[2] multiplicar')
    print('[3] maior')
    print('[4] novos números')
    print('[5] sair do programa')
    choice = int(input('Sua escolha: '))
    soma = num1 + num2
    mult = num1 * num2
    if choice == 1:
        print('A soma entre os números {} e {} vale {}'.format(num1, num2, soma))
    elif choice == 2:
        print('A multiplicação entre os núemeros {} e {} vale {}'.format(num1, num2, mult))
    elif choice == 3:
        if num1 > num2:
            print('O maior número entre {} e {} é o {}'.format(num1, num2, num1))
        else:
            print('O maior número entre {} e {} é o {}'.format(num1, num2, num2))
    elif choice == 4:
        num1 = int(input('Primeiro valor: '))
        num2 = int(input('Segundo valor: '))
print('Fim do programa!')
