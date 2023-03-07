const obj1 = {
    exemplo1: "exemplo1",
    mostraThis: function() {
        const f = (() => this)()
        console.log(f)
    }
}