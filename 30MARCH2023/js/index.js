// console.log(121);

// let num = 345;
// let res = 0;
// while(num>0){
//     res = (res*10)+num%10
//     num = Math.floor(num/10)
// }
// console.log(res);

// function fibo(num) {
//     if (num <= 1) {
//         return num
//     }
//     else {
//         return fibo(num - 1) + fibo(num - 2)
//     }
// }
// for (let i = 0; i <= 10; i++) {
//     console.log(fibo(i));
// }



// let data = [12, 15, 16];
// let min = data[0];
// let max = 0;
// for (let i = 0; i < data.length; i++) {
//     if (min > data[i]) {
//         min = data[i]
//     }
//     if (max < data[i]) {
//         max = data[i]
//     }
// }
// let arr = [];
// function missing(data, min, max) {
//     for (let i = min; i < max; i++) {

//         if (i < i + 1 && !data.includes(i + 1)) {
//             console.log(i + 1)
//         }
//     }
//     return null
// }
// missing(data, min, max)

let obj1 = {
    name: "satendra",
    surname: "kushwaha"
}
console.log(obj1);

let obj2 = obj1;

obj2.name = "virendra";
obj2.surname = "pathak"
console.log(obj2);
console.log(obj1);
