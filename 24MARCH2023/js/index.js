// let data = [12,34,56,78];
// let max1 = 0;
// let max2 = 0;
// for(let i = 0;i<data.length;i++){
//     if(data[i]>max1){
//         max1 = data[i]
//     }
// }
// for(let i = 0;i<data.length;i++){
//     if(data[i]<max1 && data[i]>max2){
//         max2 = data[i]
//     }
// }console.log(max2);

// let num = 123;
// let res = "";
// while(num>0){
//     res+=num%10
//     num = Math.floor(num/10)
// }
// console.log(res);


// let a = 5;
// let b = 10;
// a = a + b
// b = a - b
// a = a - b
// console.log(a, b);

// let str = "vikas";
// let str2 = "kasvi";
// let s = str.split("").sort();
// let ss = str2.split("").sort();
// if(str.length!=str2.length){
//     console.log("not anagram");
// }
// else{
//     let s1 = s.join("");
//     let s2 = ss.join("");
//     if(s1===s2){
//         console.log("anagram");
//     }
// }


// let str = "vikas";
// let res = "";
// for(let i = str.length-1;i>=0;i--){
//     res+=str[i]
// }
// console.log(res);

// function test(){
//     let data = [12,13,14,16];
//     let start = data[0];
//     for(let i = start;i<16;i++){
//         if(i<i+1 && !data.includes(i+1)){
//     return i+1
//         }
//     }
//     return null
// }
// console.log(test());


// function fibo(num){
//     if(num<=1){
//         return num
//     }
//     return fibo(num-1)+fibo(num-2)
// }
// let num = 10
// for(let i = 0;i<=num;i++){
//     console.log(fibo(i));
// }



// let firstNum = 0;
// let secondNum = 1;
// console.log(firstNum);
// console.log(secondNum);
// for(let i = 0;i<=10-2;i++){
//     let nextNum = firstNum+secondNum
//     console.log(nextNum);
//     firstNum = secondNum
//     secondNum = nextNum
// }



// let num = 20;
// let count = 0
// for(let i = 2;i<=num;i++){
//     count = 0
//     for(let j = 2;j<=i;j++){
//         if(i%j==0){
//             count++
//         }
//     }
//     if(count ==1){
//         console.log(i);
//     }
// }


// let data = [12, 34, 56, 12, 1, 34,56,12,34];
// let arr = []; let newArr = []
// for (let i = 0; i < data.length; i++) {
//     for (let j = i + 1; j < data.length; j++) {
//         if (!arr.includes(data[i]) && data[i]==data[j] ) {
//             arr.push(data[i])

//         }
//     }
// }
// console.log(arr);


// class List {
//     constructor(data, next) {
//         this.data = data,
//             this.next = null
//     }
// }

// class LinkedList {
//     constructor(data, next) {
//         this.head = null,
//             this.tail = null
//     }
//     insertAtBeginning(data) {
//         const list = new List();
//         list.data = data;
//         if (!this.head) {
//             this.head = list,
//                 this.tail = list
//         }
//         else {
//             list.next = this.head,
//                 this.head = list
//         }
//     }
//     insertAtEnd(data) {
//         const list = new List();
//         list.data = data;
//         if (!this.head) {
//             this.head = list,
//                 this.tail = list
//         }
//         else {
//             this.tail.next = list,
//                 this.tail = list
//         }
//     }
//     print(data) {
//         for (let i = this.head; i != null; i = i.next) {
//             console.log(i.data);
//         }
//     }
// }

// const node = new LinkedList();
// node.insertAtBeginning(0)
// node.insertAtEnd(1)
// node.insertAtBeginning(5)
// node.print()


