let promise = new Promise((resolve, reject) => {
    resolve('ok')
})

promise
    .then((data) => {
        console.log(`sucesso: ${data}`)

        throw new Error("error")

        return data;
    })
.then((data) => console.log('sucesso'))
.catch((data) => console.log('falha'))

/* Vemos que na primeira execução da promise, temos um retorno true, e o código é executado
porém no segundo aninhamento, temos um erro, e o JS automaticamente cancela a execução da promise e retorna o catch.
Isso facilita na hora de testarmos e descobrirmos em qual ponto está partindo o erro.*/