let bruxos = ['Harry', 'Hermione', 'Rony']
let iteradorBruxos = bruxos[Symbol.iterator]();

console.log(iteradorBruxos.next())
console.log(iteradorBruxos.next())
console.log(iteradorBruxos.next())
console.log(iteradorBruxos.next())