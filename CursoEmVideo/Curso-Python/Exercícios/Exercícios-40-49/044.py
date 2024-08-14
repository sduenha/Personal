 # Gerenciando Pagamentos
print('\033[1;33m{:=^36}'.format(' LOJAS AMERICANAS '))
preço = float(input('Digite o preço da comprar: R$'))
print('Escolha a forma de pagamento')
print('[ 1 ] - à vista dinheiro / cheque')
print('[ 2 ] - à vista no cartão')
print('[ 3 ] - 2x no catão')
print('[ 4 ] - 3x ou mais no cartão')
pagamento = int(input('Qual a forma de pagamento:'))
forma1 = preço - preço * 10 / 100
forma2 = preço - preço * 5 / 100
forma4 = preço + preço * 20 / 100
if pagamento == 1:
    print('O preço da compra era R${:.2f} agora será de R${:.2f}'.format(preço, forma1))
elif pagamento == 2:
    print('O preço da compra era de R${:.2f} agora será de R${:.2f}'.format(preço, forma2))
elif pagamento == 3:
    print('O pagamento será em 2x')
elif pagamento == 4:
    print('O preço da sua compra será de {:.2f}'.format(forma4))
else:
    print('\033[2;30mCódigo INVALIDO tente novamente!\033[m')
print('\033[1;33mObrigado pela preferencia! Volte sempre!\033[m')
