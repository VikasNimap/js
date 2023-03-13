console.log("hello");

// let data = [1, 34, 6, 7];
// let max = 0;
// let max2 = 0;
// for (let i = 0; i < data.length; i++) {
//     if (data[i] > max) { max = data[i] }
// }
// for (let i = 0; i < data.length; i++) {
//     if (data[i] < max && data[i] > max2) { max2 = data[i] }
// }
// console.log(max2);

// let num = 345;
// let res="";
// while(num>0){
//     res+=num%10
//     num=Math.floor(num/10)
// }
// console.log(Number(res));

// let str1 = "madam";
// let str2 = "madam";
// let s1 = str1.split("").sort();
// let s2 = str2.split("").sort();
// let s = s1.join("");
// let ss = s2.join("");
// if(s===ss){console.log("anagram");}else{console.log("not anagram");}

// let s1 = "madam";
// let s2 = 'madam';
// let map1 = new Map();
// for (let i = 0; i < s1.length; i++) {
//   let  count = 0
//     if (map1.has(s1[i])) {
//         map1.set(s1[i],count++)
//     }
//     else {
//         map1.set(s1[i], 1)
//     }
// }
// let map2 = new Map();
// for(let i = 0;i<s2.length;i++){
//     if(map2.has(s2[i])){
//         map2.set(s2[i]),map2.get(s2[i]+1)
//     }
//     else{
//         map2.set(s2[i],1)
//     }
// }
// console.log(map1);

// let data = [11,12,13,15];
// let missing=null; //((data.length+1)*(data.length+2))/2;
// for(let i = 0;i<data.length;i++){
//     for(let j = i+1;j<i;j++){
//         if(data[i]==data[j]+1){
//             console.log("all ok");
//         }
//         else{
//             missing = data[j]+1
//         }
//     }
// }
// console.log(missing);
// let arr = [11,13,14,15,16];
// let N = 5
// let i;
// let temp = [];
// for (i = 0; i <= N; i++) {
//     temp[i] = 0;
// }

// for (i = 0; i < N; i++) {
//     temp[arr[i] - 1] = 1;
// }

// let ans = 0;
// for (i = 0; i <= N; i++) {
//     if (temp[i] == 0)
//         ans = i + 1;
// }
// console.log(ans);

// let num = 10;
// let firstNum = 0;
// let secondNum = 1;
// console.log(firstNum);
// console.log(secondNum);
// for(let i = 0;i<num-1;i++){
//     let nextNum = firstNum+secondNum
//     console.log(nextNum);
//     firstNum = secondNum
//     secondNum = nextNum
// }

// function fibo(num){
//     if(num<=1){
//         return num
//     }
//     return fibo(num-1)+fibo(num-2)
// }
// for(let i = 0;i<=7;i++){
//     console.log(fibo(i));
// }

// function fact(num){
//     if(num<=0){
//         return 1
//     }
//     return num*fact(num-1)
// }
// console.log(fact(-1));

