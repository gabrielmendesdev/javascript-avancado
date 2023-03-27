const equipe = {
    nome: "Linguagem de programação",
    membros: ["JavaScript", "Java", "C", "Python"],
    membrosDaEquipe: function() {
        const that = this
        this.membros.forEach(function(membro) {
            console.log(`${membro} faz parte da equipe ${that.nome}`)
        })
    }
}

equipe.membrosDaEquipe()

/*O "this" que está dentro da função do forEach não tem o mesmo objeto global que o "this" 
que está dentro da função "membrosDaEquipe()", então para apontarmos para o mesmo objeto global, que é o objeto "equipe"
podemos salvar o "this" no escopo da função "MembrosDaEquipe" usando o método "that" na váriavel, assim ele
irá respeitar o escopo em que está, mesmo sendo usado em outro contexto*/ 