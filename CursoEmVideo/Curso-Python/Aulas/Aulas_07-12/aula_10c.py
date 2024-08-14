n1 = float(input('Digite a primeira nota: '))
n2 = float(input('Digite a segunda nota: '))
m = (n1 + n2) / 2
print('A sua média foi {:.1f}'.format(m))
if m >= 6.0:
    print('Você está dentro da média do seu colégio! Parabéns!')
else:
    print('Você está abaixo da média do colégio! Se esforce mais!')
