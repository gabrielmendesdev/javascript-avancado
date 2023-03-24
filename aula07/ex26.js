let map = new Map()
function funcao(){}
let objeto = {}

map.set("string1", "Sou uma string")
map.set(funcao, "Sou uma função")
map.set(objeto, "Sou um objeto")

for(let chave of map.keys()) {
    console.log(chave)
}

console.log("--------------")

for(let chave of map.values()) {
    console.log(chave)
}

console.log("-------------")

for(let chave of map.entries()) {
    console.log(chave)
}