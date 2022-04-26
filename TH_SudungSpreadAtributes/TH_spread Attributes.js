// const  cars1 = ["audi","bmw","tata","mercedes"];
// const  cars2 = [...cars1]// coppy phan tu tai manng 1 sang mang 2
// const cars3 = [...cars1,'nissan','toyota']// them phan tu moi vao mang so 3
// console.log(cars1);
// console.log(cars2);
// console.log(cars3);


// Hop nhat cac mang
// const cars1 = ["audi","bmw","tata","mercedes"];
// const cars2 = ["nissan","toyota"];
// const cars3 = [...cars1,...cars2];
// console.log(cars3); // ket qua noi 2 mang
  // hop nhat cac doi tuong

// const cars1 = {
//     Brand :"toyota",
//     Color : "red"
// }
// const cars2 = {
//     Brand: "nissan",
//     Color: "Blue",
//     Year : 2004
// }
//
// const cars3 = { ...cars1,...cars2}
// console.log(cars3); // ket qua hien thi se khong noi 2 oject ma no se ghi de cas gia tri sau cua cac oject sau

//5. sử dụng spread để cắt từng phần tử từ chuỗi thành từng phần tử của mảng
// Trước dùng split để cắt từng pần tử chuỗi
// const  car = "audi";
// const a = [...car];
// console.log(a);


//6. Cấu trúc lại mảng
const numbers = [3,4,6,3,2,4,6];
// lay cac phan tu 3,4,6 va cac phan tu con lai cua mang
const [a,b,c,...other] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(other);




