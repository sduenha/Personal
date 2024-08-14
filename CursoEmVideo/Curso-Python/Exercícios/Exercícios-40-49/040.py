#Média do aluno(Entre dois valores)
n1 = float(input('Digite a sua primeira nota: '))
n2 = float(input('Digite a sua segunda nota: '))
média = (n1 + n2) / 2
if média >= 7 :
    print('Parabéns! Você foi \033[1;34maprovado\033[m!')
elif média >= 5:
    print('Você está de \033[1;31mrecuperação\033[m!')
else:
    print('Você está \033[1;31mREPROVADO\033[m!')
