// var generateName = require("sillyname");
import generateName from "sillyName";

var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

//use var generateName = require("sillyname"); or import generateName from "sillyname"; both will gonna work.

// const superheroes = require("superheroes");
import superheroes from "superheroes";

const name = superheroes.random();
console.log(`I am ${name}!`);
//-> I am John Wraith.