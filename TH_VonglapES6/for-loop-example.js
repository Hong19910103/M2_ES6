function geeks(){
    console.log('for(;;)')
    for (let i = 0; i <= 10; i+=2) {
        console.log(i +" ")  // in ra dãy số theo quy luật
    }
    console.log("for...of");
    for (let i of ["ha noi",20.32,3000]) {
        console.log(i + " ") // in ra các đối tượng trong mảng

    }
    let obj = { name:"perter", age: 25, salary: 3000 };
    console.log("for ...in")
    for ( let i in obj){
        console.log(obj[i] + " "); // in lặp qua các thuộc tính trong object
    }
}
geeks();
