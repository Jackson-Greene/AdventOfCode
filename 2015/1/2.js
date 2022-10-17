export function getSolution(input) {
    //when number of ) is 1 greater than number of ( the floor will be -1
    let numLeftBrackets = 0;
    let numRightBrackets = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "(") {
            numLeftBrackets++;
        } else {
            numRightBrackets++;
        }

        if (numRightBrackets - 1 === numLeftBrackets) {
            return i + 1;
        }
    }

    return null;
}
