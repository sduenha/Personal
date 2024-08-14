# Medindo área para comprar tinta 
l = float(input('Largura da parede em metros: '))
a = float(input('Altura da parede em metros: '))
ar = l * a
t = ar / 2
print('Sua parede tem uma dimensão de {:.2f} x {:.2f} e sua área é de {:.2f}m²'.format(l, a, ar))
print('Para pintar a sua parede você vai precisar de {:.2f}l de tinta'.format(t))
