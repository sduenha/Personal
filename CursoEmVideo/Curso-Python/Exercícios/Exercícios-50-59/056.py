# Analizador completo
nome = ''
idade = 0
somaidade = 0
mediaidade = 0
idadehomemvelho = 0
homemvelho = ''
mulher20 = 0
nomemulher20 = ''
for c in range(1, 5):
    print('==== {}° PESSOA ===='.format(c))
    nome = str(input('Nome: ')).strip()
    idade = int(input('Idade: '))
    sexo = str(input('Sexo [F/M] ' )).strip()
    somaidade += idade
    if c == 1 and sexo in 'Mn':
        idadehomemvelho = idade
        homemvelho = nome
    else:
        if idade > idadehomemvelho:
            idadehomemvelho = idade
            homemvelho = nome
    if idade < 20 and sexo in 'Ff':
        mulher20 = + 1
        nomemulher20 = nome
mediaidade = somaidade / 4
print('A media de idade do grupo é de {} anos'.format(mediaidade))
print('O homem mais velho é o {}'.format(homemvelho))
print('Tem {} mulhere/s com menos de 20 anos'.format(mulher20))