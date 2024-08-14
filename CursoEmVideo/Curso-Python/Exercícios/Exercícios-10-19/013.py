# Reajuste salárial
s = float(input('Qual é o seu salário? R$ '))
a = s * 1.15
print('um funcionario com um salário de R${:.2f}, com o aumento de 15% agora ele recebe R${:.2f}'.format(s, a))

s = float(input('Qual é o seu salário? R$'))
n = s + (s * 15/100)
print('Um funcionario que ganhava R${:.2f}, com um aumento de 15%, ele passa a receber R${:.2f}'.format(s, n))
