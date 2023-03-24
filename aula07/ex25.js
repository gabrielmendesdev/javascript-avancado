let map = new Map()
function funcao(){}
let objeto = {}

map.set("string1", "Sou uma string")
map.set(funcao(), "Sou uma função")
map.set(objeto, "Sou um objeto")

//get -> Retorna o valor da chave

console.log(map.get("string1"))
console.log(map.get(funcao()))
console.log(map.get(objeto))

//size -> Retorna a quantidade de maps

console.log(`Tamanho: ${map.size}`)

//has -> Testa se o elemento especificado existe(retorna um valor boleano)

console.log(map.has("string1"))

//delete -> apaga um elemento dos maps

map.delete(funcao)
console.log(`Tamanho: ${map.size}`)

//clear -> remove todos os elementos dos maps

map.clear()
console.log(`Tamanho: ${map.size}`)