let promise = new Promise((resolve, reject) => {
    let resultado = true
    let tempo = 2000
    setTimeout(() => {
        if(resultado) resolve("ok")
        else reject ("not ok")
    }, tempo)

})

promise.then((data) => console.log(`${data}`))
promise.catch((data) => console.log(`${data}`))

console.log('fui executado antes!')

/*Nesse caso, podemos analisar que a linha 14 é executada antes que a promisse, pois, a promise só é executada
após o timeout de 2 segundos, é uma simulação do que acontece com uma promisse, que é executada, por exemplo,
após a requisição de um web service */