// npm -i lodash pra esse codigin funcionar Duvida aula: 151 do curos
// sudo npm i -g nodemon (o "-g" quer dizer q é global no sistema mesmo)
// nodemon "arquivo.js" - deixa vc mudar o código em tempo real
const _ = require("lodash");
setInterval(() => console.log(_.random(1, 1000)), 2000);
