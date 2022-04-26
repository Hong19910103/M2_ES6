let arr = [1, 3, 4, 5, 6, 7, 8];
let square = (item) => item * item;

function arrSquare(fun, arr) {
    let newArr = [];
    arr.forEach((element)=>{
        newArr.push(fun(element));
    });
    return newArr;
}

console.log(arrSquare(square,arr));