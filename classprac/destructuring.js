const arr1=[10,20,30,40,50]
let [a,b,,c]=arr1;
console.log(a);
console.log(b);
console.log(c);

const student={
    name:"ALice",
    age:30,
    subjects:{
        sub1:"React",
        sub2:"Node"
    }
}
const {age,name}=student;
console.log(name);
console.log(age);


// spread operator :it expands an iterable into invidual elements commonly used for copying arrays or objects,or passing elements to functions
// in fucntions
function sum1(a,b,c){
    return a+b+c;
}
const arr=[1,2,3];
console.log(sum1(...arr));

// rest operator :it connects multiple elements into single array
function add(...num){
    const sum=num.reduce((acc,b)=>acc+b,0);
    return sum;

}
console.log(add(1,2,3,4,5,6,7,8));


const arr2=[1,2,3,4,5];
function restfunction(a,...rest){
    console.log(a);
    console.log(...rest);
}
restfunction(arr2);