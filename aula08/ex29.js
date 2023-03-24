//weakMap é usado para manter o programa protegido de memory leak
//manter dados privados dentro da aplicação

let pessoa = (function() {
    
    let dadosPrivados = new WeakMap()

    function pessoa(nome) {
        dadosPrivados.set(this,{nome: nome})
    }
    
    pessoa.prototype.getNome = function() {
        return dadosPrivados.get(this).nome
    };   

    return pessoa
}())

let roberto = new pessoa('Roberto')

console.log(roberto.getNome())
console.log(roberto._nome)



