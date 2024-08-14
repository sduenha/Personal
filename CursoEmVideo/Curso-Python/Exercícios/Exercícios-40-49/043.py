# IMC(Índice de massa corporal)
peso = float(input('Qual o seu peso? (KG) '))
altura = float(input('Qual a sua altura (M) '))
IMC = peso / (altura * altura)
print('O seu IMC é de {:.1f}!'.format(IMC))
if IMC < 18.5:
    print('Você está abaixo do peso.')
elif IMC < 25:
    print('Parabéns! Você está no peso normal!')
elif IMC < 30:
    print('Você está com sobrepeso!')
elif IMC < 40:
    print('Você está em obesidade!')
elif IMC > 40:
    print('CUIDADO! Você está com obesidade mórbida! Procure um médico!')
