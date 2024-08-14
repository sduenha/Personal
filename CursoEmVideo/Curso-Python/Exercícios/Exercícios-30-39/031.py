# Custo da viajem
km = float(input('Qual é a distância da sua viajem? '))
if km <= 200:
    preco = km * 0.50
    print('A sua passagem vai custar R${:.2f}'.format(preco))
else:
    desconto = km * 0.45
    print('A sua passagem vai custar R${:.2f}'.format(desconto))
'''preco = km * 0.50 if km <= 200 else km * 0.45
print('O preço da sua passagem será de R${:.2f}'.format(preco))'''
print('BOA VIAJEM!')
