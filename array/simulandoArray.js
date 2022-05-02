const quaseArray = { 0: "Rafael", 2: "Ana", 3: "Bia" };
console.log(quaseArray);
Object.defineProperty(quaseArray, "toString", {
    value: function () {
        return Object.values(this);
        enumerable: false;
    },
});

console.log(quaseArray[0]);

const meuArray = ["Rafael", "Ana", "Bia"];
console.log(quaseArray.toString(), meuArray);
