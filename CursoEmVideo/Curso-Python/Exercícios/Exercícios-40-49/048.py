# Soma dos números ímpares mutiplos de 3
end = 0
cont = 0
for c in range(1, 501, 2):
    if c % 3 == 0:
        cont += 1
        end += c
print('A soma de todos os {} valores requisitados é {}'.format(cont, end))
