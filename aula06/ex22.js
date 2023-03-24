//Laço for...in

let carro = {
    modelo: 'fiat',
    ano: 1995
}

for(let propriedade in carro) {
    let info = carro[propriedade]
    console.log(info)
}