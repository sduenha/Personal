# Primeiro e último nome de uma pessoa 
name = str(input('Digite o seu nome completo:')).strip()
d = name.split()
print('Prazer em te conhecer {}!'.format(name))
print('O seu primeiro nome é {}'.format(d[0]))
print('Seu último nome é {}'.format(d[len(d) - 1]))
