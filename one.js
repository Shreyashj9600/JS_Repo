let userOne = {
    email: 'shre12@google.com',
    id:123
}

let userTwo = userOne;

userTwo.email = 'new123@google.com'

// console.log(userOne.email)
// console.log(userTwo.email)


//===========================

// date and time 

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleTimeString())

let myArr = [1,2,3,4,5]
let str = ['q','w','e','r']
let newArr = myArr.join()

console.log(newArr)