''' if = se sim / else = se não / elif = se não se 
Começa sempre com if
Pode usar quantos elif quiser/precisar'''
nome = str(input('Qual é o seu nome: '))
if nome == 'Samuel':
    print('Que nome bonito!')
elif nome == 'Helcio':
        print('Que nome diferente!')
else:
    print('Seu nome é comum!')
print('Tenha um bom dia, {}!'.format(nome))
# Você pode tirar o else.
 