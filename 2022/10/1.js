export function getSolution(input) {
    let lines = input.split("\n");
    let operations = lines.map((line) => {
        return line.split(" ");
    });

    let X = 1;

    let history = [];

    operations.forEach((operation) => {
        if (operation[0] === "noop") {
            history.push(X);
        } else {
            history.push(X);
            history.push(X);
            X = X + +operation[1];
        }
    });

    return history[20 - 1] * 20 + history[60 - 1] * 60 + history[100 - 1] * 100 + history[140 - 1] * 140 + history[180 - 1] * 180 + history[220 - 1] * 220;
}
