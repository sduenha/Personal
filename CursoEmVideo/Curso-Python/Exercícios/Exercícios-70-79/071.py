# Simulando um caixa eletronico
print('=' * 53)
print('{:^53}'.format('Banco CEV'))
print('=' * 53)
valor = int(input('Valor a ser sacado: R$ '))
total = valor
cedula = 100
totaldecedula = 0
while True:
    if total >= cedula:
        total -= cedula
        totaldecedula += 1
    else:
        if totaldecedula > 0:
            print(f'Total de {totaldecedula} cédulas de R${cedula}')
        if cedula == 100:
            cedula = 50
        if cedula == 50:
            cedula = 20
        elif cedula == 20:
            cedula = 10
        elif cedula == 10:
            cedula = 5
        elif cedula == 5:
            cedula = 1
        totaldecedula = 0
        if total == 0:
            break
print('=' * 53)
print('{:^53}'.format('Volte sempre ao Banco CEV! Tenha um bom dia!'))
print('=' * 53)
