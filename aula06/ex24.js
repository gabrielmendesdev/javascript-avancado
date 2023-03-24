//Simplificando o dógigo do ex 20

let chapeuSeletor = function(bruxo) {
    let casas = ['Grifinória', 'Sonserina', 'Corvinal', 'Lufa-Lufa']
    let casa = casas[Math.floor(Math.random() * casas.length)]

    console.log(`Bruxo: ${bruxo} "Casa: ${casa}`)
}

let bruxos = ['Harry', 'Hermione', 'Rony']

for(let bruxo of bruxos) {
    chapeuSeletor(bruxo)
}