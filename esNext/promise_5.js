function funcionarOuNao(valor, chanceDeErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log("temp");
            if (Math.random() < chanceDeErro) {
                reject("Ocorreu um erro!");
            } else {
                resolve(valor);
            }
        } catch (e) {
            resolve(e);
        }
    });
}

funcionarOuNao("Testado...", 0.5)
    .then((v) => console.log(`Valor: ${v}`))
    .then(
        (v) => console.log(v),
        (err) => console.log(`Erro Esp.: ${err}`)
    )
    .then(() => console.log("Quase fim!"))
    .catch((err) => console.log(`Erro Geral: ${err}`))
    .then(() => console.log("Fim!"));
