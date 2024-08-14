#Calculadora
from math import sqrt
from time import sleep
continuar = 1

print('Aqui é a calculadora!')
print('Para começar escolha a operação que você deseja fazer: ')
while continuar == 1:
    print('1 = soma')
    sleep(0.2)
    print('2 = subtração')
    sleep(0.2)
    print('3 = multiplicação')
    sleep(0.2)
    print('4 = divisão')
    sleep(0.2)
    print('5 = raíz quadrada')
    sleep(0.2)
    print('6 = potencia')
    sleep(0.2)
    print('7 = porcentagem')
    sleep(0.2)
    print('8 = raiz de segundo grau')
    sleep(0.2)
    print('9 = função')
    sleep(0.5)
    print('10 = conversor de tempo')
    choise = int(input('\033[1;34mO qual a operação escolhida?\033[m '))
    if choise == 1:
        n1 = float(input('Digite o primeiro número: '))
        n2 = float(input('Digite o segundo número: '))
        soma = n1 + n2
        print('A soma entre o número {} e {} vale {}'.format(n1, n2, soma))

    elif choise == 2:
        n1 = float(input('Digite o primeiro número: '))
        n2 = float(input('Digite o segundo número: '))
        sub = n1 - n2
        print('A subtração entre o número {} e {} vale {}'.format(n1, n2, sub))

    elif choise == 3:
        n1 = float(input('Digite o primeiro número: '))
        n2 = float(input('Digite o segundo número: '))
        mult = n1 * n2
        print('A multiplicação entre {} e {} vale {}'.format(n1, n2, mult))

    elif choise == 4:
        n1 = float(input('Digite o primeiro número: '))
        n2 = float(input('Digite o segundo número: '))
        div = n1 / n2
        print('A divisão entre {} e {} vale {}'.format(n1, n2, div))

    elif choise == 5:
        #Tá com erro!
        n1 = int(input('Qual o número para descobrir a raiz?'))
        raiz = sqrt(n1)
        if raiz == int:
            print('A raíz quadrada de {} é {}'.format(n1, raiz))
        else:
            print('O número {} não tem raíz inteira'.format(n1))

    elif choise == 6:
        n1 = int(input('Digite o número: '))
        poten = int(input('Digite a elevação: '))
        potencia = n1 ** poten
        print('{} elevado ao {} grau é {}'.format(n1, poten, potencia))

    elif choise == 7:
        porcen = int(input('Digite a porcentagem: '))
        n1 = float(input('Digite o número: '))
        a = n1 * porcen
        porcentagem = a / 100
        print('{}% de {} é {}'.format(porcen, n1, porcentagem))

    elif choise == 8:
        a = int(input('Digite o valor de A: '))
        b = int(input('Digite o valor de B: '))
        c = int(input('Digite o valor de C: '))
        delta =  b ** 2 -4 * a * c

        if delta > 0:
            x1 = (-b + sqrt(delta))/2*a
            x2 = (-b - sqrt(delta))/2*a
            print('O valor de delta é {}'.format(delta))
            print('As raizes são x1 = {} e x2 = {}'.format(x1, x2))
        elif delta == 0:
            x1 = (-b + sqrt(delta))/2*a
            print('O valor de delta é {}'.format(delta))
            print('A raiz é x = {}'.format(x1))
        else:
            print('O valor de delta é {}'.format(delta))
            print('A equação não possui raízes reais')

    elif choise == 9:
        x0 = int(input('Qual o valor do x0? '))
        y0 = int(input('Qual o valor de y0? '))
        x1 = int(input('Qual o valor de x1? '))
        y1 = int(input('Qual o valor de y1? '))
        a = (y1-y0)/(x1-x0)
        b = -a * x0 +y0
        print(' A função é y = {}x + {}'.format(a,b))

    elif choise == 10:
        form = int(input('''Escolha a medida de entrada:
        [ 1 ] Segundos
        [ 2 ] Minutos 
        [ 3 ] Horas
        [ 4 ] Mês
        [ 5 ] Ano
        Digite: '''))
        tempo = float(input('Digite o número de entrada: '))
        if form == 1:
            print('{} segundos, são {} minutos, {} horas, {} mêses, {} anos'.format(tempo, tempo / 60, tempo / 3600, tempo / 2.628e+6, tempo / 3.154e+7 ))

    else:
        print('\033[1;31mNúmero inválido!\033[m')

    sleep(1)
    continuar = int(input('\033[1;34mVocê deseja continuar?\033[m\n\033[1;33mSe sim digite 1\033[m\n\033[1;31mSe não digite 2\033[m\n' ))
print('\033[1;34mObrigado por usar o meu programa!\033[m')
