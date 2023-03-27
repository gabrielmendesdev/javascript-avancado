const equipe = {
    nome: "Linguagem de programação",
    membros: ["JavaScript", "Java", "C", "Python"],
    membrosDaEquipe: function() {
        this.membros.forEach(membro => {
            console.log(`${membro} faz parte da equipe ${this.nome}`)
        })
    }
}

equipe.membrosDaEquipe()