# Jogo do advinha v.2
from random import randint
from time import sleep
cont = 0
pc = randint(1, 10)
print('Olá! Aqui é o computador! Vamos jogar um jogo? ')
sleep(1)
print('Vai ser assim, eu escolho um número de 0 a 10 e você tem que adivinhar!')
print('Você está pronto? Eu estou!')
sleep(0.5)
choice = int(input('Qual o seu palpite? '))
acertou = False
while not acertou:
    if choice != pc:
        print('Esse não foi o número que eu pensei')
        sleep(0.5)
        if choice > pc:
            choice = int(input('Menos... Qual o seu próximo palpite? '))
        elif choice < pc:
            choice = int(input('Mais... Qual o seu próximo palpite? '))
        cont += 1
    else:
        print('\033[34mParabéns! Você acertou!\033[m')
        sleep(1)
        acertou = True
print('Fim de jogo! Você precisou de {} palpites para acertar!'.format(cont))
