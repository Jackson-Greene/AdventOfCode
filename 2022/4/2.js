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

        let firstArray = Array.from({ length: first[1] - first[0] + 1 }, (_, i) => first[0] + i);
        let secondArray = Array.from({ length: second[1] - second[0] + 1 }, (_, i) => second[0] + i);

        let containsOverlap = firstArray.some((r) => secondArray.indexOf(r) >= 0);

        if (containsOverlap) {
            totalFullContain += 1;
        }
    });

    return totalFullContain;
}
