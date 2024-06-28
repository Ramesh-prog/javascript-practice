// print web bocket 5 times 

// let i;
// for( i = 1; i <= 5; i++){
//     console.log("web bocket")
// }

// calculate the sum of 1 to 5 (for loop)

// let sum = 0;
// for (let i = 1; i <= 5; i++){
//     sum += i;
// }
// console.log("sum = ", sum)

// let i = 1; 
// while( i<= 5){
//     console.log("i = ", i);
//     i++;
// }

// let i = 1; 
// do {
//     console.log("web bocket");
//     i++;
// } while (i <= 5)

// let str = "javascript";
// let size = 0;
// for (let i of str){
    // console.log("i = ", i);
    // size++;
// }
// console.log("string size = ", size)


let student = {
    name : "rahul kumar",
    age : 56,
    CGPA : 8.9,
    isPass : true,
}

// left side part is my keys & right side are the values of that keys. 
// here name, cgpa, age, isPass - keys
// rahul kumar, 56, 8.9 , true - values

for (let key in student){
    console.log("key = ", key, "value = ", student[key])
}