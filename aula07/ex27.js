//Pratica fictícia do uso de MAP

let livros = [
    {nome: "Os Ticoliros", autor: "Marcelo Santos", local: "A3"},
    {nome: "O que se passa na cabeça de um macaco ?", autor: "Daniel Menezes", local: "D5"},
    {nome: "Piscicultura: A arte de um pescador", autor: "Pedro Pontes", local: "C3"},
    {nome: "Vevecos também são gente", autor: "Lucas Oliveira", local: "L2"},
    {nome: "O aposentado do PHP", autor: "David Mendes", local: "J8"},
    {nome: "Braçudos habilitados que quebram o retrovisor no portão de casa", autor: "Mateus Pitondo", local: "A1"},
    {nome: "O calango do JavaScript", autor: "Pedro Pitondo", local: "H1"}
]

let estantes = new Map()

for(let livro of livros) {
    estantes.set(livro.nome, livro.local)
}

function getLocalizacaoLivro(nome) {
    let estante = estantes.get(nome)
    if (estante === undefined) {
        return 'Livro não encontrado no sistema'
    } else {
        return estante
    }
}

let localizacao = getLocalizacaoLivro("Braçudos habilitados que quebram o retrovisor no portão de casa")
console.log(localizacao)

let localizacao1 = getLocalizacaoLivro("Vevecos também são gente")
console.log(localizacao1)