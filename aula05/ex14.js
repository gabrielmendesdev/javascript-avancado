//Princípio .every
let jogos = [
    {nome: 'Crash Bandicoot', categoria: 'aventura'},
    {nome: 'Need for Speed', categoria: 'corrida'},
    {nome: 'The King of Fighters', categoria: 'luta'},
    {nome: 'Forza Horizon', categoria: 'corrida'},
    {nome: 'Assassins Creed', categoria: 'aventura'}
]

let todosJogosAventura = jogos.every(function(jogo) {
    return jogo.categoria === 'aventura'
})

console.log(todosJogosAventura)