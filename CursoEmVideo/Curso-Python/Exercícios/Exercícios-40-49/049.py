# Tabuada

# o {:2} serve para colocar dois digitos dentro das chaves
num = int(input('Chose a number: '))
for c in range(1, 11):
    print('{} x {:2} = {}'.format(num, c, num * c))
 