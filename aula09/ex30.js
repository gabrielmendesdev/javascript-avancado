//Método Set

let musica_1 = {titulo:'Sem você meu coração é null', autor:'Oracle'}
let musica_2 = {titulo:'Meu coração componentizado', autor:'React'}
let musica_3 = {titulo:'Tudo isso é tão dinâmico', autor:'JavaScript'}
let musica_4 = {titulo:'Não me chame depois', autor:'node'}

let playlist = new Set()

playlist.add(musica_1) 
playlist.add(musica_3)

for(let musica of playlist) {
    console.log(musica)
}

//Aceita .delete, .add, .clear