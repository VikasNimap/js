// console.log(1234567890);

// let data = [15,13,14,11];
// function missing(data){
// let sort = data.sort((a,b)=>a-b);
// // console.log(sort);
// for(let i = sort[0];i<15;i++){
//     if(i<i+1 && !sort.includes(i+1)){
//         console.log(i+1);
//     }
// }
// return null
// }
// missing(data)

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
// node.insertAtBeginning(4)
// node.print()

