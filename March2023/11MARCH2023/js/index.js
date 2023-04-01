// console.log("javascript");
// function test(){
//     return  setTimeout(() => {
//         console.log("hello");
//     }, 1000); 
// }
// test()

// console.log(1);
// let p1 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => { 
//             console.log(2);
//             resolve() 
//         }, 1000);
//     })
// }
// async function test(){
//     await p1()
//     console.log(3);
// }
// test()


// function test() {
//     for (var i = 1; i <= 5; i++) {
//         function test1(i){
//             setTimeout(() => {
//                 console.log(i);
//             }, i * 1000);
//         }
//         test1(i)

//     }
//     console.log("Namastey");
// }
// test()

// function test(){
//     for(let i = 0;i<=5;i++){
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);

//     }
// }
// test()

// function doSomethingCb () {
//     console.log(1);
//     const promise = new Promise((resolve) => {
//         resolve(5);
//     })
//     setTimeout(() => {
//         console.log(2);
//         Promise.resolve(4).then(data => console.log(data));
//     }, 0);
//     console.log(3);
//     return promise;
// };

// const promise = doSomethingCb();
// // promise.then(data => console.log(data));
// promise.then(data=>console.log(data))

// for(var i = 0;i<=5;i++){
//     function close(i){
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
//     close(i)
// }

// let i = 100;
// function test(){
//     function test1(){
//         console.log(i);
//     }
//     return test1
// }
// test()()

// function hello(b) {
//     function test() {

//         function close() {
//             console.log(a, b);
//         }
//         let a = 100;
//         return close
//     }
//     return test
// }

// let a = hello("vikas");
// a()()

// function multiply(b) {
//     return function (a) {
//         return a * b
//     }
// }
// let double = multiply(2)()
// console.log(double(2));


// function test(){

//     console.log("est.name");
// }
// // test.name = "vikas"
// test.call()

