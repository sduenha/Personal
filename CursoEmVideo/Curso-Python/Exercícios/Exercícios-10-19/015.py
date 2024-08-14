# Alugueu de carro
dias = int(input('Por quantos dias você alugou o carro? '))
km = float(input('Quantos Km você foram rodados com ele? '))
#pdia = dias * 60
#pkm = km * 0.15
total = (dias * 60) + (km * 0.15)
print('O total a pagar é de R${:.2f}'.format(total))
