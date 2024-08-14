# JOKENPO
from random import randint
from time import sleep
itens = ('Pedra', 'Papel', 'Tesoura')
print('Escolha a sua jogada:')
print('[ 0 ] PEDRA')
print('[ 1 ] PAPEL')
print('[ 2 ] TESOURA')
choise = int(input('Qual é a sua jogada? '))
raindow = randint(0, 2)
print('JO')
sleep(0.5)
print('KEN')
sleep(0.5)
print('PO')
sleep(0.5)
print('-=' * 11)
print('O computador escolheu {}'.format(itens[raindow]))
print('Você escolheu {}'.format(itens[choise]))
print('-=' * 11)
if choise == raindow:
    print('O jogo empatou!')
elif choise == 0:
    if raindow == 1:
        print('O computador ganhou!')
    elif raindow == 2:
        print('O jogador venceu!')
    else:
        print('Jogada Inválida!')    
elif choise == 1:
    if raindow == 0:
        print('O jogador venceu!')
    elif raindow == 2:
        print('O computador venceu!')
    else:
        print('Jogada inválida!')
elif choise == 2:
    if raindow == 0:
        print('O computador ganhou!')
    elif raindow == 1:
        print('O jogador ganhou!')
    else:
        print('Jogada inválida!')
