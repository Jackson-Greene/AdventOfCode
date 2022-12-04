export function getSolution(input) {
    let lines = input.split("\n");
    let linesSplit = lines.map((line) => {
        return line.split(",");
    });

    let totalFullContain = 0;

    linesSplit.forEach((lineSplit) => {
        let first = lineSplit[0].split("-");
        let second = lineSplit[1].split("-");

        first = [parseInt(first[0]), parseInt(first[1])];
        second = [parseInt(second[0]), parseInt(second[1])];

        if (first[0] <= second[0] && first[1] >= second[1]) {
            totalFullContain += 1;
        } else if (second[0] <= first[0] && second[1] >= first[1]) {
            totalFullContain += 1;
            console.log(first, second);
        }
    });

    return totalFullContain;
}
