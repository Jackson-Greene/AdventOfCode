export function getSolution(input) {
    let [crates, moves] = input.split("\n\n");

    let cratesParsedLines = crates
        .replaceAll("] [", " ")
        .replaceAll("[", "")
        .replaceAll("]", "")
        .replaceAll("    ", " ")
        .split("\n")
        .map((line) => {
            return line.split(" ");
        });

    cratesParsedLines.pop();

    let createsMap = {};

    cratesParsedLines.forEach((lineArray) => {
        lineArray.forEach((element, index) => {
            if (element != "") {
                if (!createsMap[index + 1]) {
                    createsMap[index + 1] = [];
                }

                createsMap[index + 1].push(element);
            }
        });
    });

    let movesParsedLines = moves.split("\n").map((line) => {
        return line.match(/\d+/g).map((v) => +v);
    });

    movesParsedLines.forEach((move) => {
        let movedCrates = [];
        for (let i = 0; i < move[0]; i++) {
            movedCrates.unshift(createsMap[move[1]].shift());
        }

        movedCrates.forEach((crate) => {
            createsMap[move[2]].unshift(crate);
        });
    });

    let solution = "";

    for (let i = 1; i <= Object.keys(createsMap).length; i++) {
        solution += createsMap[i][0];
    }

    return solution;
}
