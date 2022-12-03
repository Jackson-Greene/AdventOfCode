export function getSolution(input) {
    let lines = input.split("\n");
    let linesSplit = lines.map((line) => {
        return line.split(" ");
    });

    let score = 0;

    linesSplit.forEach((round) => {
        let opponentChoice = round[0];
        let ownChoice = round[1];

        switch (opponentChoice) {
            case "A":
                switch (ownChoice) {
                    case "X":
                        score += 1 + 3;
                        break;
                    case "Y":
                        score += 2 + 6;
                        break;
                    case "Z":
                        score += 3 + 0;
                        break;
                    default:
                        break;
                }
                break;

            case "B":
                switch (ownChoice) {
                    case "X":
                        score += 1 + 0;
                        break;
                    case "Y":
                        score += 2 + 3;
                        break;
                    case "Z":
                        score += 3 + 6;
                        break;
                    default:
                        break;
                }
                break;

            case "C":
                switch (ownChoice) {
                    case "X":
                        score += 1 + 6;
                        break;
                    case "Y":
                        score += 2 + 0;
                        break;
                    case "Z":
                        score += 3 + 3;
                        break;
                    default:
                        break;
                }
                break;

            default:
                break;
        }
    });

    return score;
}
