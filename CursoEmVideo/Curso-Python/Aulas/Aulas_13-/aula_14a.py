# Laços de repetição while 
for c in range(1, 11):
    print(c)
print('FIM')

c = 1
while c < 11:
    print(c)
    c += 1
print('FIM')

num = 1
while num != 0:
    num = int(input('Digite um valor: '))
print('FIM')

r = 'S'
while r == 'S':
    n = int(input('Digite um valor: '))
    r = str(input('Quer continuar? [N/S] ')).upper()
print('FIM')
