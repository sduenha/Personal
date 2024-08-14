# Detecto de palíndromo 
frase = str(input('Digite uma frase: ')).strip().upper() #tira os espaços antes e depois, deixa tudo maiusculo 
palavras = frase.split()#separa a frase em uma lista
junto = ''.join(palavras)#junta as palavras sem os espaços
inverso = ''
for letras in range(len(junto) - 1, - 1, - 1):#faz o inverso
    inverso += junto[letras]#faz o inverso  
if inverso == junto:
    print('Temos um palíndromo!')
    print(junto, inverso)
else:
    print('A frase digitada não é um palíndromo!')
    print(junto, inverso)

#tem como fazer sem o for
frase = str(input('Digite uma frase: ')).strip().upper() 
palavras = frase.split()
junto = ''.join(palavras)
inverso = junto[::-1] #pega a frase do inicio ao fim e coloca de trás para frente
if inverso == junto:
    print('Temos um palíndromo!')
    print(junto, inverso)
else:
    print('A frase digitada não é um palíndromo!')
    print(junto, inverso)