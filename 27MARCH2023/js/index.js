// console.log("vikas");

// let data = [10, 11, 12, 14, 16];
// let max = 16;
// function missing(data, max) {
//     // console.log(data, max);
//     for (let i = 10; i < max; i++) {
//         if (i < i + 1 && !data.includes(i + 1)) {
//             console.log(i + 1); ;
//         }

//     }
// }
// (missing(data, max))

// let data = [12, 34, 12, 56, 34, 6];
// let arr = [];
// for (let i = 0; i < data.length; i++) {
//     for (let j = i + 1; j < data.length; j++) {
//         if(!arr.includes(data[i]) && data[i]==data[j]){
//             arr.push(data[i])
//         }
//     }
// }console.log(arr);


// let data = [12,34,12,34,5];;
// let arr=[];
// for(let i = 0;i<data.length;i++){
//     for(let j = i+1;j<data.length;j++){
//         if(data[i]==data[j]){
//             arr.push(data[i])
//         }
//     }
// }console.log(arr);


// let data = [80, 60, 10, 50, 30, 100, 0, 50];

// for(let i = 0;i<data.length;i++){
//     for(let j = i+1;j<data.length;j++){
//         if(data[i]+data[j]==100){
//             console.log(data[i],data[j]);
//         }
//     }
// }



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
//         const list = new List()
//         list.data = data;
//         if (!this.head) {
//             this.head = list,
//                 this.tail = list
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
//         for(let i = this.head;i!=null;i=i.next){
//             console.log(i.data);
//         }
//     }
// }
// const node = new LinkedList();
// node.insertAtBeginning(0)
// node.insertAtBeginning(1)
// node.insertAtEnd(2)

// let node1= new LinkedList();
// node1.insertAtBeginning(4)
// node1.insertAtEnd(1)
// // node1.print()
// for(let i = node.head;i!=null;i=i.next){
//     for(let j = node1.head;j!=null;j=j.next){
//         if(i.data==j.data){
//             console.log(i.data);
//         }
//     }
// }


// setTimeout(() => {
//     function test() {
//         console.log("hello and welcome");
//     }
// }, 2000);
// test()


// let num = 345;
// let res = 0;
// while (num > 0) {
//     res = res * 10 + (num % 10)
//     num = Math.floor(num / 10)
//     console.log(res)
// }

// let num = 789;
// let res = 0;
// while (num > 0) {
//     res = res * 10 + num % 10
//     num = Math.floor(num/10)
// }console.log(res);



// console.log("Welcome to Programiz!");
// let opening_hours = {
//     monday:{start: "12:00",end: "13:00",allDay: true},
//     tuesday:{start: "13:00",end: "14:00",allDay: false},
//     wednesday:{start: "13:00",end: "14:00",allDay: false},
//     thursday:{start: "13:00",end: "14:00",allDay: false}
// }

// let a = Object.keys(opening_hours);
// for(let i = 0;i<a.length;i++){
//     a[i]={start:"12:00"}
// console.log(a[i])
// }

// let week = {
//     day1: "Monday",
//     day2: "Tuesday",
//     day3: "Wednesday"
// }
// for(let i = 0;i<4;i++){
// let res = week[Object.keys(i)];
// console.log(res)
// }


