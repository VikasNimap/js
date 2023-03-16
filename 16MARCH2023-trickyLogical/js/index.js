// console.log(0987654321);
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
//         list.data = data
//         if(!this.head){
//             this.head = list,
//             this.tail = list
//         }
//         else{
//             list.next = this.head
//             this.head = list
//         }
//     }
//     insertAtEnd(data){
//         const list = new List();
//         list.data = data
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
//         for (let index = this.head; index != null; index=index.next) {
//             console.log(index.data);

//         }
//     }
// }

// const node = new LinkedList()
// node.insertAtBeginning(0)
// node.insertAtEnd(1)
// node.insertAtEnd(4)
// node.print()


// function counter(){
//     let count = 0;
//     return function incrementCounter(){
//         count++
//         console.log(count);
//     }
// }

// let count1 = counter()
// count1()
// count1()

// function Counter(){
//     let count = 0;
//     this.incrementCount = function(){
//         count++
//         console.log(count);
//     }
//     this.decrementCount = function(){
//         count--
//         console.log(count);
//     }
// }

// let count1 = new Counter();
// let count2 = new Counter();
// count1.incrementCount()
// count1.incrementCount()
// count1.incrementCount()
// count1.incrementCount()
// count1.decrementCount()

// function test(){
//     console.log("hello");
// }
// test()

// let a = function(){
//     console.log("a called");
// }

// function (){

// }

// let a = function test(){

// }

// function test(){

// }
// console.log(test());

// let data = [12,15,13,14];

// let max = 0;

// function fact(num){
//     if(num<=0){
//         return 1
//     }
//     return num * fact(num-1)
// }
// console.log(fact(5));


// let str = "vikas";
// let res = "";
// for(let i = str.length-1;i>=0;i--){
//     res+= str[i]
// }
// console.log(res);

// let data = [12,34,0,-78,90];
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

// let data = [1, 2, 3, 4, 5, 6];
// function test(data, sign) {
//     let res = data[0];
//     for (let i = 1; i < data.length; i++) {
//       if(sign=='+'){
//         res+=data[i]
//       }
//       else if(sign=='-'){
//         res-=data[i]
//       }
//       else if(sign == '*'){
//         res *= data[i]
//       }
//       else if(sign == '/'){
//         res/=data[i]
//       }
//     }
//     console.log(res);
// }
// test(data, '-');

// let data = [1, 2, 3, 4, 5, 6];
// function test(data, sign) {
//     let res = eval(data.join(sign));
//     // let r = res.eval()

//     console.log(res);
// }
// test(data,"/")



// let data = [1, 2, 3, 4, 5, 6];
// function result(data, sign) {
//     let ans = data.reduce((acc, curr) => {
//         if (sign == '+') {
//             acc += curr
//             return acc
//         }
//         else if (sign == '-') {
//             acc -= curr
//             return acc
//         }
//         else if (sign == '*') {
//             acc *= curr
//             return acc
//         }
//         else if (sign == '/') {
//             acc /= curr
//             return acc
//         }
//     })
//     console.log(ans);
// }
// result(data, '/');


