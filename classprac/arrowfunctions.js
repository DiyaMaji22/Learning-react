const str=()=>"I am studying React";
console.log(str());
// var has global scope 
// let and const has local scope 
    
// arrayMethods
// concat()=>Merge
// every()=>Checks if each element of an array passes the test
// fliter()=>
// find()
// foreach()
// Array.from()
// indexOf()
// map
// reduce
// reverse 
// let arr1=[1,2,3,4,5];
// let arr2=arr1.forEach(n=>{
//     n=n+2;
//     console.log(n);
// });
// let index=arr1.indexOf(2);
// console.log(index);
// let Reverse=arr1.reverse();
// for(let i=0;i<arr1.length;i++)
// {
//     console.log(arr1[i]);

// }
// let Reduce=arr1.reduce((arr,n)=>arr+n,0);
// console.log(Reduce);


let students=[
    {name:"Harsh",age:24,marks:80},
    {name:"Raj",age:12,marks:32},
    {name:"Ankit",age:21,marks:40},
    {name:"Komal",age:21,marks:50},
    {name:"Arun",age:21,marks:95}
];

// filter students who passed marks greater than or equal to 50 
let GoodMarks=students.filter(b => b.marks >= 50)
.map(b =>({name:b.name ,marks:b.marks})); 
console.log(GoodMarks);
// reate a new array of marks after adding 5 bonus marks
students.forEach(b=>{
    b.marks=b.marks+5
    console.log(b.marks);
})

// Find the first student who scored more than 90 
let goodstudent=students.find(b =>b.marks>90)
console.log(goodstudent.name);
// calculate total marks of all the students 
let totalsum=students.reduce((acc,b)=>acc+b.name, "");
console.log(totalsum);
// print congratulations message for every student 
students.forEach(b=>{
    console.log(`Congratulations you passed the test ${b.name}`); 
})


