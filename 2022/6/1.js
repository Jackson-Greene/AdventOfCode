export function getSolution(input) {
    let charcters = input.split("");

    let found = false;
    let solutionIndex = 0;

    charcters.forEach((charcter, index) => {
        if (index >= 3) {
            let previousCharacters = charcters.slice(index - 3, index + 1);

            if (new Set(previousCharacters).size === previousCharacters.length && !found) {
                found = true;
                solutionIndex = index + 1;
            }
        }
    });

    return solutionIndex;
}
