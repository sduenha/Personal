# Le a idada e sexo de pessoas e mostra quantas são maiores de 18, quantos são homens, quantas mulheres tem menos de 20
maioridade = contadorm = contadorf = 0
resposta = 'S'
while True:
    print('-' * 53)
    print('Cadastre uma pessoa')
    print('-' * 53)
    idade = int(input('Idade: '))
    sexo = ''
    while sexo not in 'MF':
        sexo = str(input('Sexo: ')).upper().strip()[0]
    if idade >= 18:
        maioridade += 1
    if sexo in 'M':
        contadorm += 1
    if sexo in 'F' and idade < 20:
        contadorf += 1
    resposta = ''
    while resposta not in 'SN':
        resposta = str(input('Quer continuar? ')).upper().strip()[0]
    if resposta == 'N':
        break
print('Das pessoas cadastradas: ')
print(f'    {maioridade} pessoas tem mais de 18 anos')
print(f'    {contadorm} são homens')
print(f'    {contadorf} são mulheres menores de 20 anos')