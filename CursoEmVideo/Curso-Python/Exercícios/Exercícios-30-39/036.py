# Aprovando imprestimo

# Se colocar (end = '') a linha não é cortada 
valor = float(input('Qual é o valor da casa? R$'))
salario = float(input('Qual é o seu salário? R$ '))
a = int(input('Em quantos anos você pretende pagar? '))
anos = a * 12
prestação  = valor / anos
mínimo = salario * 30 / 100
print('Para comparar uma casa de R${:.2f} em {} anos a prestação será de R${:.2f}'.format(valor, a, prestação))
if prestação <= mínimo:
    print('Empréstimo \033[1;32mCONSEDIDO\033[m!')
else:
    print('Empréstimo \033[1;31mNEGADO\033[m!')
 