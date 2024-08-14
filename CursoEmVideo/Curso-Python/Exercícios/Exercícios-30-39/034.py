# Aumento do salário
salario = float(input('Qual o salário do funcionário? R$'))
if salario <= 1250:
    novo = salario * 1.15
else:
    novo = salario * 1.10
print('O novo salário desse funcionário será de R${:.2f}'.format(novo))
