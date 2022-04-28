console.log('01)', '1' == 1)// compara valor
console.log('02)', '1' === 1)// compara tipo
console.log('03)', '3' != 3)// compara se são iguais sem considerar tipo
console.log('04)', '3' !== 3)//compara se ambos são iguais considerando tipo

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)// nesse caso compara se é igual
console.log('13)', undefined === null)// nesse caso compara se é extremamente igual