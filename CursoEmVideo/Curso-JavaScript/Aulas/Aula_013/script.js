// Estrutura de repetição com teste lógico no começo
// Primeiro testa depois faz.
var contador = 1
while (contador <= 10){
    console.log(contador)
    contador ++
}

// Estrutura de repetição com teste lógico no fim
// Faz primeiro depois testa
do{
    console.log(`Passo ${contador}`)
    contador ++
}while(contador <= 10)