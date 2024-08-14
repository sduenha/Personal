# Par ou impar que acaba quando o jogador perde
from random import randint
vencedor = jogador = escolhacomputador = soma = div = contador =  0
computador = 1
while True:
    escolhajogador = int(input('Digite um valor: '))
    parouimpar = str(input('Par ou Ímpar? [P/I] ')).upper() .strip() [0]
    escolhacomputador = randint(0, 5)
    soma = escolhajogador + escolhacomputador
    div = soma % 2
    print(f'O computador escolheu {escolhacomputador} e você escolheu {escolhajogador}')
    if div == 0 and parouimpar == 'P':
        print('Parabén você GANHOU!')
        contador += 1
    elif div != 0 and parouimpar == 'P':
        print('Você PERDEU!')
        vencedor = computador
        if vencedor == computador:
            break
    elif div != 0 and parouimpar == 'I':
        print('Parabéns você GANHOU!')
        contador += 1
    elif div == 0 and parouimpar == 'P':
        print('Você PERDEU!')
        vencedor = computador
        if vencedor == computador:
            break
print(f'Fim de Jogo! Você venceu {contador} vezes')

# Código do Guanabara
# from random import randint
# v = 0
# while True:
#     jogador = int(input('Digite um valor: '))
#     computador = randint(0, 10)
#     total = jogador + computador
#     tipo = ''
#     while tipo not in 'PI':
#         tipo = str(input('Par ou Ímpar? [P/I] ')).strip().upper()[0]
#     print(f'Você jogou {jogador} e o computador {computador}. Total de {total} ', end='')
#     print('Deu par' if total % 2 == 0 else 'Deu ímpar!')
#     if tipo =='P':
#         if total % 2 == 0:
#             print('Você venceu!')
#             v += 1
#         else:
#             print('Você perdeu!')
#             break
#     elif tipo == 'I':
#         if total % 2 == 1:
#             print('Você venceu!')
#             v += 1
#         else:
#             print('Você perdeu!')
#             break
#     print('Vamos jogar novamente...')
# print(f'GAME OVER! Você venceu {v} vezes!')
