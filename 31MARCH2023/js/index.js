// console.log(1234);

// function test(){
//     console.log(1)

// }
// setTimeout(() => {
//     test()
// }, 5000);

// setTimeout(() => {
//     function test(){
//         console.log(12345);
//     }
// }, 2000);

// test()

// var a = 50;
// let a = 53;
// console.log(a,a);

// function test() {
//     console.log(1);
//     // setTimeout(() => {
//         test()
//     // }, 5000);
// }
// test()

// setTimeout(() => {
//     function test() {
//         console.log(1);
//     }
//     test()
// }, 5000);

// // test()
// console.log(2);

// function test(test1) {
//     function test1() {
//         console.log(123);
//     }
// }

// test(test1())
// let test2 = test1()


// let datA = [2345,34];
// function test(datA) {
//     return function test2(){
//         console.log(2);
//     }
// }

// test(datA)()


// function data(a) {
//     console.log(1);
//     // console.log(a);
//     a()
// }

// function test() {
//     console.log("hello2");
// }

// function test3() {
//     console.log(1234);
// }
// data( test, test3(),6)

// function test() {
//     console.log(1);
//     return function test2() {
//         return function test3() {
//             console.log(5);
//             console.log(345);
//         }
//     }
// }

// let a = test()
// console.log(a())



// let a=12;
// let data = [12,34,55,66,89];
// console.log(data[1])


// let a = ()=>{
//     console.log("vikas");
// }
// a()


// function test() {
//     console.log(1);
//     function test1(y) {
//         console.log(4);
//         // x()
//         y(function x() {
//             console.log("x called");
//         })
//     }
//     test1(function y(z) {
//         z()
//         console.log(12345);
//     })
// }
// test()


// let users = {
//     name: "vikas",
//     stack: "node",
//     age: 21
// }
// let key = [];
// let value = [];

// key.push(...Object.keys(users));
// value.push(...Object.values(users))
// key[1] = "ram"
// console.log(key);
// console.log(value);
// console.log(users);


// function x(t, y) {
//     console.log("x");
//     y()
//     console.log(t);

// }



// x(console.log("p"), function y() {
//     console.log("y");
// },

// )



// let arr = [12, 0, null, undefined, false, "", NaN];
// let filter = arr.filter((e) => e)
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] || arr[i] == 0) {
//         console.log(arr[i]);
//     }
// }
// console.log(filter);\\


let data = [12, 0, null, undefined, false, "", NaN];
for (let i = 0; i < data.length; i++) {

    if (data[i] || data[i] === 0) {
        console.log(data[i]);
    }
}