'''CODIGOS DAS CORES!!!!
três valores, 1 para style da letra, um para o text, e outro pro back
4 codogos de style: 0 = none, 1 = bold, 4 = underline, 7 = negative
8 codigos de color de text: 30 = branco, 31 = vermelho, 32 = verde, 33 = amarelo, 34 = azul, 35 = magenta,
36 = ciana, 37 = cinza.
8 codigos para cor do back: 40 = branco, 41 = vermelho, 42 = verde, 43 = amarelo, 44 = azul, 45 = magenta,
46 = ciana, 47 = cinza!'''
print('\033[0;31;43mOlá, mundo!\033[m')
print('\033[1;35mOlá, mundo!\033[m')
print('\033[7mOlá, mundo!\033[m')
a = int(input('Digite um número: '))
b = int(input('Digite outro valor: '))
print('Os valores são \033[1;32m{}\033[m e \033[1;31m{}\033[m e a soma entre eles vale \033[1;35m{}\033[m!'.format(a, b, (a+b)))

print('Olá, \033[0;33m mundo \033[m!')
