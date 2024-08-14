# Lendo o sexo. Só aceita M ou F
M = 'M'
F = 'F'
sexo = str(input('Qual o seu sexo? [M\F]')).strip().upper()[0]
while sexo not in 'MmFf':
    print('Sexo invalido!')
    sexo = str(input('Digite novamente: [M\F]')).upper()
print('FIM')
