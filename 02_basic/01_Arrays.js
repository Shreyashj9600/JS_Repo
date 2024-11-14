// slice or splice

const myArr = [0,1,2,3,4,5]
console.log("A" , myArr);

const myN1 = myArr.slice(1,3)   
console.log(myN1);
console.log("B" , myArr);

const myN2 = myArr.splice(1,3)
console.log("c",myArr);
console.log(myN2);
