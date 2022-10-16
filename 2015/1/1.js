export function getSolution(input) {
  let numLeftBrackets = input.split("(").length - 1;
  //let numLeftBrackets = (input.match(/\(/g) || []).length;
  let numRightBrackets = input.length - numLeftBrackets;
  let floor = numLeftBrackets - numRightBrackets;

  return floor;
}
