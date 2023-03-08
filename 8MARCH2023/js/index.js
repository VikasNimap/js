// console.log("hello");
// let data = [34,56,78,90,21,43];
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
// }
// console.log(max2);

// let num = 345;
// let res = "";
// while(num>0){
//     res += num%10
//     num = Math.floor(num/10)
// }
// console.log(Number(res));

// let a = 10;
// let b = 12;
// a = a + b    //22
// b = a - b    //10
// a = a - b    //12
// console.log(a,b);

// let str1 = "madam";
// let str2 = "madam";
// let res = "";
// let count = 0;
// if(str1.length != str2.length){
//     console.log("length are not equal.");
// }
// for(let i = 0;i<str1.length;i++){
//     for(let j = 0;j<str2.length;j++){
//         if(str1[i]==str2[j]){
//             count++
//         }
//         for(let x = 0;x<res.length;x++){
//             if(res[x]==str2[j]){
//                 count = 0
//             }
//         }
//         if(count==1){
//             res += str1[i]
//             count = 0
//         }

//         // if(count >1){
//         //     count = 1
//         //     res += str1[i]
//         //     count = 0
//         // }
//     }
// }
// if(str1.length == res.length && str1==res){
//     console.log('anagram');
// }
// else{
//     console.log("not anagram");
// }
// console.log(res);

// let str = "ABCDE";
// let res = "";
// for(let i = str.length-1;i>=0;i--){
//     res += str[i]
// }
// console.log(res);

// let str = "madam";
// console.log(str.length);
// let res = "";
// for(let i = str.length-1;i>=0;i--){
//     res += str[i]
// }
// if(str===res){
//     console.log("palindrome");
// }
// console.log(res);

// function factorial(num){
//     if(num==0){
//         return 1
//     }
//     return num * factorial(num-1)
// }
// console.log(factorial(5));

// function fibonacci(num){
//     if(num<=1){
//         return num
//     }
//     return fibonacci(num-1) + fibonacci(num-2)
// }
// for(let i = 0;i<=10;i++){
//     console.log(fibonacci(i));
// }

// let n = 10;
// function print(num) {
//     console.log(num);
//     if(num>=1){
//         print(num-1)
//     }
// }
// print(n);

// let num = 6;
// let res = 1;
// for(let i = num;i>=1;i--){
//     res *= i
// }
// console.log(res);

// function factorial(num){
//     if(num<=1){
//         return num
//     }
//     return num * factorial(num-1)
// }
// console.log(factorial(5));
// let data = [12,43,22,5,6,53,43];
// function test(num){
//     if(num%2==0){
//         console.log(num);
//     }
//     return test(num)
// }
// test(...data)

// let data = ["vikas","satendra","vishal","depak"];
// let i = 0;
// while(i<data.length){
//     console.log(data[i]);
//     i++
// }

// const str = "hello world";
// const arr = str.split(""); // split the string into an array of characters
// arr.sort();
// console.log(arr);

// function string(str){
//     let arr = str.split("");
//     arr.sort();
//     console.log(arr);
//     let map = {};
//     for(let i = 0;i<arr.length;i++){
//         if(!map.hasOwnProperty(arr[i])){
//             map[arr[i]] = 1
//         }
//         else{
//             map[arr[i]]++
//         }
//     }
//     console.log(map);
// }
// string("hello world")

// function string(str){
//     let obj = {};
//     for(let i = 0;i<str.length;i++){
//         let char = str[i];
//       if(obj[char]){
//         obj[char]++
//       }
//       else{
//         obj[char] = 1
//       }

//     }
//     for(let i = 0;i<obj.length;i++){
//         obj[char] = i
//     }
//     console.log(obj.toString());
//     return obj
// }

// console.log(string("hello world"));

// let o

// function test(num){
//     if(num<=10){
//     console.log(num);
//         test(num+1)
//     }
// }
// test(0);


// class List{
//     constructor(data,next){
//         this.data = data,
//         this.next = null
//     }
// }
// class LinkedList{
//     constructor(data,next){
//         this.head = null,
//         this.tail = null
//     }
//     insertAtBeginning(data){
//         const list = new List();
//         list.data = data;
//         if(!this.head){
//             this.head = list,
//             this.tail = list
//         }
//         else{
//             list.next = this.head,
//             this.head = list
//         }
//     }
//     insertAtEnd(data){
//         const list = new List();
//         list.data = data;
//         if(!this.head){
//             this.head = list,
//             this.tail = list
//         }
//         else{
//             this.tail.next = list,
//             this.tail = list
//         }
//     }
//     print(data){
//         for(let i = this.head;i != null;i=i.next){
//             console.log(i.data);
//         }
//     }
// }
// const node = new LinkedList();
// node.insertAtBeginning(0);
// node.insertAtEnd(10);
// node.insertAtEnd(20);
// node.insertAtEnd(30);
// node.insertAtEnd(40);
// node.insertAtBeginning(1)
// node.print()

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
//         list.data = data
//         if (!this.head) {
//             this.head = list,
//                 this.tail = list
//         }
//         else {
//             list.next = this.head,
//                 this.head = list
//         }
//     }
//     print(data) {
//         for (let i = this.head; i != null; i = i.next) {
//             console.log(i.data);
//         }
//     }
// }

// const node = new LinkedList();
// node.insertAtBeginning(10);
// node.insertAtBeginning(5);
// node.insertAtBeginning(1);
// node.print()

// let data = [12,34,56,78,98,2,12,98];
// for(let i = 0;i<data.length;i++){
//     for(let j = i+1;j<data.length;j++){
//         if(data[i]==data[j]){
//             console.log(data[i]);
//         }
//     }
// }

// function string(str){
//     let obj = {};
//     for(let i = 0;i<str.length;i++){
//         let char = str[i];
//         if(obj[char]){
//             obj[char]++
//         }
//         else{
//             obj[char] = 1
//         }
//     }
//     let data = {}
//     for(let key in obj){
//         data[obj[key]] = key
//     }
//     let res = Object.entries(data).map(([key,value])=>`${key}${value}`).join("");
//     return res
// }
// console.log(string("heellloooo"))

// let data = {
//     1: "vikas",
//     3: "vikas@gmail.com"
// }
// console.log(Object.entries(data).map(([key,value])=>`${key}${value}`).join(""));

// let str = "heelllo";
// let obj = {};
// for(let i = 0;i<str.length;i++){
//     let char = str[i]
//     if(obj[char]){
//         obj[char]++
//     }
//     else{
//         obj[char] = 1
//     }
// }
// let data = {}
// for(let key in obj){
//     data[obj[key]] = key
// }
// let res = Object.entries(data).map(([key,value])=>`${key}${value}`).join("");
// // return res
// console.log(res);

