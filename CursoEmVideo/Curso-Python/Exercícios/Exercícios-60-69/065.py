# Mostra a media e o maior e menor
num = contador = soma = media = maior = menor = 0
sn = ''
while sn in 'Ss':
    num = int(input('Digite um valor: '))
    contador += 1
    soma += num
    sn = str(input('Quer continuar?[s \ n] ')).strip() [0]
    if contador == 1:
        maior = menor = num
    if num > maior:
        maior = num
    if num < menor:
        menor = num
media = soma / contador
print('Você digitou {} números'.format(contador))
print('A média entre os valores digitados foi de {}'.format(media))
print('O maoir número foi digitado foi o {} e o menor {}'.format(maior, menor))
