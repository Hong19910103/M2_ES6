// let name = [" alpha", "beta", "gama", "delta"];
// // let [firstName, secondName]=name;
// // let[firstName, ,secondName] = ['alpha','beta','gama','delta']
// let [firstName, ...lastName] = name;
// console.log(firstName);
// console.log(lastName);

// Xuất từ 1 mảng trả về từ 1 hàm
// function NameList(){
//     return [ 'alpha','bata','gamma','delta']
// }
// let [firstName, secondName] = NameList();
// console.log(firstName);
// console.log(secondName);

// let marks = { x:21, y:-34, z:47};
// let {x,y,z} = marks;
// console.log(x)
// console.log(y)
// console.log(z)

const marks = {
    section1:{alpha: 15,beta:16},
    section2:{alpha: 31,beta:19}
}
const {section1:{alpha:alpha1,beta:beta1},...lastsec}=marks;
console.log(alpha1,beta1)
console.log(lastsec)
