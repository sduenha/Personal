# Calcula a média
from time import sleep

#Calculando a média de ciências
prova1ciencias = float(input('Qual a nota da prova mensal de ciências? '))
provamensalciencias = prova1ciencias * 3
nota1ciencias = float(input('Qual a nota tarefa de ciências? '))
notatarefaciencias = nota1ciencias * 3
notaformsciencias = float(input('Qual a nota de formulário de ciências? '))
prova2ciencias = float(input('Qual a nota da prova trimestral de ciências? '))
provatrimestralciencias = prova2ciencias * 3
notaprojeto = float(input('Qual a nota do projeto? '))
somaciencias = provamensalciencias + provatrimestralciencias + notatarefaciencias + notaformsciencias + notaprojeto
finalcienias = somaciencias / 11
print('===============000===============')
sleep(1)

# Descobrindo a nota de Geografia
prova1geo = float(input('Qual a nota da prova mensal de Geografia? '))
provamensalgeo = prova1geo * 3
nota1geo = float(input('Qual a nota tarefa de Geografia? '))
notatarefageo = nota1geo * 3
notaformsgeo = float(input('Qual a nota de formulário de Geografia? '))
notaqmagicogeo = float(input('Qual a nota do Qmágico de Geo? '))
prova2geo = float(input('Qual a nota da prova trimestral de Geografia? '))
provatrimestralgeo = prova2geo * 3
somageo = provamensalgeo + provatrimestralgeo + notatarefageo + notaformsgeo + notaqmagicogeo + notaprojeto
finalgeo = somageo / 12
print('===============000===============')
sleep(1)

# Descobrindo a nota de história
prova1hist = float(input('Qual a nota da prova mensal de história? '))
provamensalhist = prova1hist * 3
nota1hist = float(input('Qual a nota tarefa história? '))
notatarefahist = nota1hist * 3
notaformshist = float(input('Qual a nota de Qmágico de história? '))
prova2hist = float(input('Qual a nota da prova trimestral de história? '))
provatrimestralhist = prova2hist * 3
somahist = provamensalhist + provatrimestralhist + notatarefahist + notaformshist + notaprojeto
finalhist = somahist / 11
print('===============000===============')
sleep(1)

# Descobrindo a nota de inglês
prova1ing = float(input('Qual a nota da prova mensal de inglês? '))
provamensaling = prova1ing * 3
nota1ing = float(input('Qual a nota tarefa de inglês? '))
notatarefaing = nota1ing * 3
notaformsing = float(input('Qual a nota de formulário de inglês? '))
prova2ing = float(input('Qual a nota da prova trimestral de inglês? '))
provatrimestraling = prova2ing * 3
somaing = provamensaling + provatrimestraling + notatarefaing + notaformsing + notaprojeto
finaling = somaing / 11
print('===============000===============')
sleep(1)

# Descobrindo a nota de português
prova1pt = float(input('Qual a nota da prova mensal de português? '))
provamensalpt = prova1pt * 3
nota1pt = float(input('Qual a nota tarefa de português? '))
notatarefapt = nota1pt * 3
notalivro = float(input('Qual a nota da prova do livro? '))
notaformspt = float(input('Qual a nota de formulário de português? '))
notaqmagicopt = float(input('Qual a nota do seu Qmágico de português? '))
prova2pt = float(input('Qual a nota da prova trimestral de português? '))
provatrimestralpt = prova2pt * 3
somapt = provamensalpt + provatrimestralpt + notalivro + notatarefapt + notaqmagicopt + notaformspt + notaprojeto
finalpt = somapt / 13
print('===============000===============')
sleep(1)

# Descobrindo a nota de matemática
prova1mat = float(input('Qual a nota da prova mensal de matemática? '))
provamensalmat = prova1mat * 3
nota1mat = float(input('Qual a nota tarefa de matemática? '))
notatarefamat = nota1mat * 3
notaformsmat = float(input('Qual a nota de Qmágico de matemática? '))
prova2mat = float(input('Qual a nota da prova trimestral de matemática? '))
provatrimestralmat = prova2mat * 3
somamat = provamensalmat + provatrimestralmat + notatarefamat + notaformsmat + notaprojeto
finalmat = somamat / 11
print('===============000===============')
sleep(1)

# Descorbindo a nota de TR
avaliacaotr = float(input('Qual a sua nota de avaliação de TR? '))
avaliacaotr = avaliacaotr * 2
producaotxt = float(input('Qual a sua nota de produção de texto? '))
producaotxt = producaotxt * 2
letrus1 = float(input('Qual a sua primeira nota do Letrus? '))
letrus1 = letrus1 * 2
letrus2 = float(input('Qual a sua segunda nota do Letrus? '))
letrus2 = letrus2 * 2
notatarefatr = float(input('Qual a sua nota tarefa de TR? '))
somatr = avaliacaotr + producaotxt + letrus1 + letrus2 + notatarefatr
finaltr = somatr / 9
print('===============000===============')
sleep(1)
print('\033[34mSuas médias são:\033[m')
sleep(1)
# Mostrando os resultados:
print('A sua média de \033[31mciencias\033[m foi de \033[31m{:.1f}\033[m'.format(finalcienias))
print('A sua média de \033[32mgeografia\033[m foi de \033[32m{:.1f}\033[m'.format(finalgeo))
print('A sua média de \033[33mhistória\033[m foi de \033[33m{:.1f}\033[m'.format(finalhist))
print('A sua média de \033[34minglês\033[m foi de \033[34m{:.1f}\033[m'.format(finaling))
print('A sua média de \033[35mportugês\033[m foi de \033[35m{:.1f}\033[m'.format(finalpt))
print('A sua média de \033[36mmatemática\033[m foi de \033[36m{:.1f}\033[m'.format(finalmat))
print('A sua média de \033[34mTR\033[m foi de \033[34m{:.1f}\033[m'.format(finaltr))
