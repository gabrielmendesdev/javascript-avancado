//Princípio .filter
let alunos = [
    {nome: "joão", idade: 15},
    {nome: "josé", idade: 18},
    {nome: "maria", idade: 20},
    {nome: "tulio", idade:17}
]

let alunosDeMaior = alunos.filter(function(aluno) {
    return aluno.idade >= 18
})

console.log(alunosDeMaior)