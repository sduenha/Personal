# Jogo do advinha
from random import choice
num = [1, 2, 3, 4, 5]
escolhido = choice(num)
print('Vou pensar em um número. Tente adivinhar!')
guess = int(input('Qual número de 0 a 5 você acha que eu escolhi? '))
if guess == escolhido:
    print('Parabéns você ganhou!')
else:
    print('Eu ganhei! Eu pensei no número {} não no {}'.format(escolhido, guess))

'''from random import randint
from time import sleep
computador = randint(0, 5)# Faz o computador "pensar"
print('-=-' * 20)
print('Vou pensar rm um número entre 0 e 5. Tente adivinhar...')
print('-=-' * 20)
jogador = int(input('Em que número eu pensei? '))# Jogador tenta adivinhar
PROCESSANDO...
sleep(2)
if jogador == computador:
    print('Parabéns! Você conseguiu me vencer!')
else:
    print('Ganhei! Eu pensei no número {} não no número {}'.format(computador, jogador))'''