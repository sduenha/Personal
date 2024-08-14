form = int(input('''Escolha a medidad e entrada:
[ 1 ] Segundos
[ 2 ] Minutos 
[ 3 ] Horas
[ 4 ] Mês
[ 5 ] Ano
Digite: '''))
tempo = float(input('Digite o número de entrada: '))
if form == 1:
    print('{} segundos, são {} minutos, {} horas, {} mêses, {} anos'.format(tempo, tempo / 60, tempo / 3600, tempo / 2,628e+6, tempo / 3,154e+7 ))
 