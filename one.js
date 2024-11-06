let userOne = {
    email: 'shre12@google.com',
    id:123
}

let userTwo = userOne;

userTwo.email = 'new123@google.com'

console.log(userOne.email)
console.log(userTwo.email)
