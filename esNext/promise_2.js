/*setTimeout(function () {
    console.log("Executando callback1...");

    setTimeout(function () {
        console.log("Executando callback2...");

        setTimeout(function () {
            console.log("Executando callback3...");
        }, 2000);
    }, 2000);
}, 2000);*/

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Executando promisse...");
            resolve("Vishh");
        }, tempo);
    });
}

esperarPor(3000)
    .then(() => esperarPor())
    .then(esperarPor());
