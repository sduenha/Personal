# Le o nome de vários produtos e seu preço e mostra o total gasto, quantos custam mais de 1000 e qual o nome do mais barato
continuar = 's'
nomemenor = ''
contador = contador1000 = soma = precomenor = 0
print('{:-^53}'.format('Bem vindo, ao mercado Tudo Barato'))
while True:
    nome = str(input('Nome do produto: '))
    preco = float(input('Preço do produto: R$'))
    if contador == 0 or preco < precomenor:
        precomenor = preco
        nomemenor = nome
    # if preco < precomenor:
    #     precomenor = preco
    #     nomemenor = nome
    soma += preco
    if preco > 1000:
        contador1000 += 1
    contador += 1
    continuar = str(input('Quer continar? ')).strip().upper()[0]
    while continuar not in 'SN':
        continuar = str(input('Quer continar? ')).strip().upper()[0]
    if continuar == 'N':
        break
print('{:-^53}'.format('Analizando compra'))
print(f'O total da compra foi de R${soma:.2f}.')
print(f'De {contador} produtos apenas um custa mais de 1000 reais.'if contador1000 == 1 else print(f'De {contador} produtos {contador1000} custam mais de 1000 reais.'))
print(f'O produto mais barato foi {nomemenor} que custou R${precomenor:.2f}.')
