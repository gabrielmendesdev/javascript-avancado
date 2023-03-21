//Princípio .find
let alunos = [
    {nome: "joão", idade: 15},
    {nome: "josé", idade: 18},
    {nome: "maria", idade: 20},
    {nome: "tulio", idade:17}
]

let alunoProcurado = alunos.find(function(aluno) {
    return aluno.nome === "josé";
})

console.log(alunoProcurado)

//Importante ressaltar que o método .find retorna apenas o 1º valor correspondido, ou seja, em casos em que é possível retornar multiplos valores, é aconselhado o uso do .filter