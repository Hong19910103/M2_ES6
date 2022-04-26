function multiply(a, b=8) {
    return a * b;
}
let num1=multiply(7);
console.log(num1);
let num2=multiply(7,6);
console.log(num2);


class Geeks{
    constructor(a,b=6) {
        console.log(a*b);

    }

}
let obj = new Geeks(5);
let obj1 = new Geeks(8,5);
// console.log(obj);
// console.log(obj1);
