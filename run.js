import * as fs from "fs";

//give year, day and part, like 2015 1 1
let year = process.argv[2];
let day = process.argv[3];
let part = process.argv[4];

let codePath = `./${year}/${day}/${part}.js`;
let inputPath = `./${year}/${day}/${part}.txt`;

const inputBuffer = fs.readFileSync(inputPath);
const inputString = inputBuffer.toString();

let { getSolution } = await import(codePath);

let start = Date.now();
let solution = getSolution(inputString);
let timeTaken = Date.now() - start;

console.log(solution);
console.log("Total time taken : " + timeTaken + " milliseconds");
