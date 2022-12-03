export function getSolution(input) {
    let lines = input.split("\n");

    let linesGrouped = [];
    for (var i = 0; i < lines.length; i = i + 3) {
        linesGrouped.push([lines[i], lines[i + 1], lines[i + 2]]);
    }

    let sum = 0;

    console.log(linesGrouped);

    linesGrouped.forEach((group) => {
        let found = false;

        for (var i = 0; i < group[0].length && !found; i++) {
            let character = group[0][i];

            if (group[1].includes(character) && group[2].includes(character)) {
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
