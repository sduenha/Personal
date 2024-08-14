# Soma de números e quantidade
num = contador = soma = 0
while num != 999:
    print('O programa será encerrado no moumento que o termo 999 for digitado!')
    num = int(input('Digite um valor: '))
    if num != 999:
        contador += 1
        soma += num
print('Você digitou {} termos e a soma deles vale {}'.format(contador, soma))

# cont = soma = 0
# num = int(input('Digite um número [999 para parar]: '))
# while num != 999:
#   soma += num
#   cont += 1
#   num = int(input('Digite um número [999 para parar]: '))
# print('Você digitou {} números e a soma entre eles foi {}.'.format(cont, soma))