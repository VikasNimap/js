// console.log("hello");
// let data = [11, 3, 34, 12];
// let sort = data.sort((a, b) => a - b)
// console.log(sort);
// function missing(sort) {
//     let num = 0;
//     for (let i = 0; i < sort.length; i++) {
//         if (sort[i] > num) { num = sort[i] }
//     }
//     for (let i = sort[0]; i < num; i++) {
//         if ((i < i + 1)&& !sort.includes(i+1)) {
//             console.log(i + 1);
//         }
//     }
//     return null
// }
// console.log(missing(sort));

// let data = [12,13,15,11];
// let sort = data.sort((a,b)=>a-b);
// // console.log(sort);
// function missing(sort){
//     let max = 0;
//     for(let i = 0;i<sort.length;i++){if(sort[i]>max){max=sort[i]}}
//     for(let i = sort[0];i<max;i++){
//         if((i<i+1)&& !sort.includes(i+1)){console.log(i+1);}
       
//     }
//     return null
// }
// missing(sort)

// let num = 10;
// let count = 0;
// for(let i = 2;i<=num;i++){
//     count = 0
//     for(let j = 2;j<=i;j++){
//         if(i%j==0){
//             count++
//         }
        
//     }
//     if(count==1){
//         console.log(i);
//     }
// }

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
//             this.next = this.head,
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
//         for(let i = this.head;i != null;i=i.next){
//             console.log(i.data);
//         }
//     }
// }

// let node = new LinkedList()
// node.insertAtBeginning(0)
// node.insertAtEnd(1)
// node.insertAtEnd(2)
// node.print()

