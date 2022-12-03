export function getSolution(input) {
    let lines = input.split("\n");
    let linesSplit = lines.map((line) => {
        return [line.slice(0, line.length / 2), line.slice(line.length / 2, line.length)];
    });

    let sum = 0;

    linesSplit.forEach((lineSplit) => {
        let found = false;

        for (var i = 0; i < lineSplit[0].length && !found; i++) {
            let character = lineSplit[0][i];

            if (lineSplit[1].includes(character)) {
                found = true;

                if (character === character.toLowerCase()) {
                    sum += character.charCodeAt(0) - 96;
                    //console.log(character, character.charCodeAt(0) - 96);
                } else {
                    sum += character.toLowerCase().charCodeAt(0) - 96 + 26;
                    //console.log(character, character.toLowerCase().charCodeAt(0) - 96 + 26);
                }
            }
        }
    });

    return sum;
}
