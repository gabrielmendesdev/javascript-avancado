//Contexto das coisas

console.log(this)

//Como a função é declarada dentro do escopo global, seu this continua sendo o objeto global.
function imprimeContexto(){
    console.log(this)
}
imprimeContexto()

//Aqui o this é declarado em uma função, dentro de um objeto, então o objeto global desse contexto, é o próprio objeto
let objeto = {
    meuContexto : function() {
        console.log(this)
    }
}

objeto.meuContexto()