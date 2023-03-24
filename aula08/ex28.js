//Uso de Wakmap - Wakmap só pode ser usado quando as chaves são objetos

let weakMap = new WeakMap()
let elemento1 = {atr:1}
let elemento2 = {atr:2}

weakMap.set(elemento1, 'sou o elemento 1')
weakMap.set(elemento2, 'sou o elemento 2')

console.log(weakMap.get(elemento1))
console.log(weakMap.get(elemento2))

elemento2 = null //O Weak.map não protege seu elemento, então após tirar sua referência, automaticamente se torna UNDEFINED

console.log(weakMap.get(elemento2))