// let marval_heros = ["thor", "ironman", "spiderman", "hulk"];
// let dc_heros = ["superman", "flash", "batman", "joker"];

// let heros = ["srk", "khan"];

// marval_heros.push(dc_heros); // changes in main array
// console.log(marval_heros);

// console.log(marval_heros[4][1]);

// const all_heros = marval_heros.concat(dc_heros); // return new array
// console.log(all_heros);

// const all_heros = [...marval_heros, ...dc_heros, ...heros]; // return new array with spread operator
// console.log(all_heros);

// let myArr = [1, 2, [11, 12, 13], 6, 7, [1, 2, [99, 55]], 10];

// console.log(myArr.flat(Infinity)); // return new array
// console.log(myArr);

// console.log(Array.isArray("Ravi"));
// console.log(Array.from("Ravi Karmakar"));
// console.log(Array.from({ name: "Ravi Karmakar" })); // intresting thing

let word = 25;
let word2 = 35;
let word3 = 45;

let arr = Array.of(word, word2, word3);
console.log(arr);
