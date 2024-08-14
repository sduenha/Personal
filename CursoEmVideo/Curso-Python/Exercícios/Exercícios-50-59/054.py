# Analise pessoas com maioridade e pessoas sem maioridade
from datetime import date
atual = date.today().year
totalmaior = 0
totalmenor = 0
for pessoa in range(1, 8):  
    nasc = int(input('Em que ano a {}° pessoa nasceu?'.format(pessoa)))
    idade = atual - nasc
    falta = 21 - idade
    if idade >= 21:
        print('Essa pessoa é de maior. Com {} anos'.format(idade))
        totalmaior += 1 
    else:
        print('Essa pessoa é de menor. Faltam {} anos para ela atingir a maioridade'.format(falta))
        totalmenor += 1
print('No total {} pessoas são maiores e {} são menores'.format(totalmaior, totalmenor))
