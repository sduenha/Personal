# Tábuada de vários números parando quando o número digitado for negativo
print('-'*53)
print('Para sair digite um número negativo!')
print('-'*53)
while True:
    print('=' * 53)
    num = int(input('Quer ver a tabuada de qual número? '))
    print('=' * 53)
    if num < 0:
        break
    for c in range(1, 11):
        print(f'{num} x {c} = {num * c}')
print('Fim do programa!')
