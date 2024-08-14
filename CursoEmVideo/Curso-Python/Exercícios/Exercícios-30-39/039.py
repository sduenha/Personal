# Alistamento militar 
from datetime import date
nasc = int(input('Digite o ano do seu nascimento: '))
atual = date.today().year
idade = atual - nasc
chega = 18 - idade
passou = idade - 18
print('Quem nasceu em {} tem {} anos em {}'.format(nasc, idade, atual))
if idade > 18:
    if idade == 19:
        print('Você já passou da idade de alistamento faz {} ano'.format(passou))
        ano = atual + passou
        print('Seu alistamento foi em {}'.format(ano))
    else: 
        print('Você já passou da idade de alistamento faz {} anos'.format(passou))
        ano = atual + passou
        print('Seu alistamento foi em {}'.format(ano))
elif idade < 18:
    if idade == 17:
        print('Falta {} ano para você se alistar'.format(chega))
        ano = atual + chega
        print('Seu alistamento será em {}'.format(ano))
    else:
        print('Faltam {} anos para você se alistar'.format(chega))
        ano = atual + chega
        print('Seu alistamento será em {}'.format(ano))
else:
    print('Você deve ir se alistar!')
