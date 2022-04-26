// function sum(x,y,z){
//     return x+y+z;
//
// }
// const number =[1,3,4 ];
// // console.log(sum.apply(null,number));
// console.log(sum(...number));
//
// let a= [1,3];
// // a.push([1,3,4]);
//
// a.push.apply(a,[1,2,3]);
// console.log(a);

 // su dung speadsyntax
let a= [1,2];
let b=[4,6];
a.push(...b);
console.log(a);

// sao chep 1 mang
let c=[...b];
console.log(c)

// sao chep ddoi tuong
let obj1 = {a:1,b:2};
let obj2 = {...obj1};
console.log(obj2);

// noi hai mang
let d=[...a,...b];
console.log(d)
