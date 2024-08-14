// Um array é uma variavel que tem vários elementos, cada elemento é composto por seu valor e por uma chave de identificação.
// let num = [5, 8, 2, 9, 3]

// Você pode acrescentar um valor a um determinado lugar:
// num[5] = 6

// Você pode adicionar um valor na última posição:
// num.push(200)

// Pode descobrir o tamanho da variavel:
// console.log(num.length)

// Pode colocar os valores que estão dentro da variavel em ordem crescente:
// num.sort()
// console.log(num)

// console.log(num[6])

let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O priemiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}