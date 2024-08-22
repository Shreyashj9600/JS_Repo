const Arr1 = [1,2,3,4]
const Arr2 = [5,6,7,8]

// concate arrays 
// let joinArr = Arr1.concat(Arr2)
// console.log(joinArr);

// push method
//  Arr1.push(Arr2)
// console.log(Arr1);

// spred operator
// const myNewArr = [...Arr1, ...Arr2]
// console.log(myNewArr);


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) 
console.log(Array.from({name: "hitesh"})) // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
