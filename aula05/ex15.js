//Princípio .some
let jogos = [
    {nome: 'Crash Bandicoot', categoria: 'aventura'},
    {nome: 'Need for Speed', categoria: 'corrida'},
    {nome: 'The King of Fighters', categoria: 'luta'},
    {nome: 'Forza Horizon', categoria: 'corrida'},
    {nome: 'Assassins Creed', categoria: 'aventura'}
]

let temJogoDeLuta = jogos.some(function(jogo) {
    return jogo.categoria === 'luta'
})

console.log (temJogoDeLuta)