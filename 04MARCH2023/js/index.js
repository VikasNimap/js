// console.log("Namaste Javascript");
// let data = []
// var a = 10;
// let a = 20;
// let b = 40;
// var b = 50;
// console.log(a);

// var a = 9;
// {
//     var a = 4
// }
// console.log(a);
// var a = 5
// var a = 9
// console.log(a);

// var a =20
// function test(){
//     var a = 40
//     var a = 49
//     console.log(a);
// }
// test()
// console.log(a);
// >> 49
// >> 49

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
//     insertAtEnd(data) {
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
//         for(let i = this.head;i != null;i=i.next){
//             console.log(i.data);
//         }
//     }
// }

// const node = new LinkedList();
// node.insertAtEnd(4)
// node.insertAtEnd(5)
// node.insertAtEnd(6)
// node.insertAtEnd(7)
// node.insertAtEnd(8)
// node.insertAtEnd(9)
// node.print()

// console.log("------------");
// const node2 = new LinkedList();
// node2.insertAtEnd(11)
// node2.insertAtEnd(12)
// node2.insertAtEnd(13)
// node2.insertAtEnd(6)
// node2.insertAtEnd(7)
// node2.insertAtEnd(8)
// node2.insertAtEnd(9)
// node2.print()

// for(let i = node.head;i!=null;i=i.next){
//     for(let j = node2.head;j!=null;j=j.next){
//         if(i.data==j.data){
//             console.log("common point",i.data);
//         };
//     }
// }

// console.log(1);
// let p1 = (()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log(2);
//             resolve()
//         }, 1000);
//     })
// })
// async function test(){
// await p1()
// console.log(3);
// }
// test()




