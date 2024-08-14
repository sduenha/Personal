# analizador de texto
nome = str(input('Digite o seu nome completo:')).strip()
print('Seu nome em maiúscula é {}'.format(nome.upper()))
print('Seu nome em minúscula é {}'.format(nome.lower()))
separa = nome.split()
print('Seu nome tem ao todo {} letras'.format(len(nome)-nome.count(' ')))
print('Seu primeiro nome é {} e ele tem {} letras'.format(separa[0], len(separa[0])))
