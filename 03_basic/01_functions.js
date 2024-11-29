function sayMyName() {
    console.log("s");
    console.log("s");
    console.log("s");
    console.log("s");
    console.log("s");
    console.log("s");
    console.log("s");
}

// sayMyName()

function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
}

addTwoNumbers(2 ,2 )

function loginUserMassage(usernaem ='test'){
    if(usernaem === undefined){
        console.log('please enter a username ')
        return 
    }
    return `${usernaem} just logged in`
}

console.log(loginUserMassage('shreyash'))


function calculateCartPrice (...num1) {
    return num1;
}

console.log(calculateCartPrice(2,3,4,5,6,7))