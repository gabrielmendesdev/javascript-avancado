//Princípio  .reduce 2.0
let alunos = [
    {nome: "joão", idade: 15},
    {nome: "josé", idade: 18},
    {nome: "maria", idade: 20}
]

let nomes = alunos.reduce(function(arrayNomes, aluno) {
    arrayNomes.push(aluno.nome)
    return arrayNomes
},[])

console.log(nomes)
