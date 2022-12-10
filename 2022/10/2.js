export function getSolution(input) {
    let lines = input.split("\n");

    let operations = lines.map((line) => {
        return line.split(" ");
    });

    let X = 1;

    let history = [];

    operations.forEach((operation, index) => {
        if (operation[0] === "noop") {
            history.push(X);
        } else {
            history.push(X);
            history.push(X);
            X = X + +operation[1];
        }
    });

    let output = "";
    history.forEach((value, cycle) => {
        if (cycle % 40 === 0) {
            output += "\n";
        }

        if (value - 1 === cycle % 40 || value === cycle % 40 || value + 1 === cycle % 40) {
            output += "#";
        } else {
            output += ".";
        }
    });

    return output;
}
