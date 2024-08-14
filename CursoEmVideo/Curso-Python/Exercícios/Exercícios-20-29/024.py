# Verificando primeira letra
nome = str(input('Digite o nome da sua cidade:').strip().capitalize())
separado = nome.split()
print('SANTO' in separado[0])
print(nome[:5] == 'Santo')
