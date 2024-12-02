
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
console.log(c);

// note {block scope} {} <- global scope 

function one() {
    const username = 'shreyash'

    function two() {
        const youtube = 'chai or code '
        console.log(username)
    }
    console.log(youtube)

    two()
}
one()

