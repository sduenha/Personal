frase = ('Curso em Vídeo Python')
print(len(frase)) # indica o número de caracteres

print(frase.count('o')) # conta qunatas vezes aparece determinada letra

print(frase.count('o', 0, 13)) # tem a mesma função mas já fatiando a frase

print(frase.find('deo')) # mostra onde começou determinado conjunto de caracteres

print(frase.find('Androide')) # se não existe ele mostra o valor -1

print('Curso' in frase) # se tiver ele mostra True

