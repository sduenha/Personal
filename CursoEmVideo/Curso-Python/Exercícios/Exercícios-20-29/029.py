# Radar
velo = int(input('Qual é a velocidade do carro? '))
acima = velo - 80
multa = 7 * acima
if velo > 80:
    print('Você foi multado!')
    print('Você exedeu o limite de velocidade de 80KM/h ')
    print('Você deve pagar a multa de R${:.2f}!'.format(multa))
print('Tenha um Bom Dia! Dirija com segurança!')
