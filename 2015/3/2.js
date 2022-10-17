export function getSolution(input) {
    //start at 0, 0 (relative)
    let santaCurrentCoordinate = { x: 0, y: 0 };
    let roboCurrentCoordinate = { x: 0, y: 0 };

    //map of coorindates and how many times each has been visited
    let visitedCoordinates = {
        "0, 0": 2,
    };

    console.log("test");

    for (let i = 0; i < input.length; i++) {
        let coordinateString = "";

        if (i % 2 === 0) {
            switch (input[i]) {
                case "^":
                    santaCurrentCoordinate.y = santaCurrentCoordinate.y + 1;

                    break;
                case "v":
                    santaCurrentCoordinate.y = santaCurrentCoordinate.y - 1;
                    break;

                case ">":
                    santaCurrentCoordinate.x = santaCurrentCoordinate.x + 1;
                    break;

                case "<":
                    santaCurrentCoordinate.x = santaCurrentCoordinate.x - 1;
                    break;

                default:
                    break;
            }

            coordinateString = `${santaCurrentCoordinate.x}, ${santaCurrentCoordinate.y}`;
        } else {
            switch (input[i]) {
                case "^":
                    roboCurrentCoordinate.y = roboCurrentCoordinate.y + 1;

                    break;
                case "v":
                    roboCurrentCoordinate.y = roboCurrentCoordinate.y - 1;
                    break;

                case ">":
                    roboCurrentCoordinate.x = roboCurrentCoordinate.x + 1;
                    break;

                case "<":
                    roboCurrentCoordinate.x = roboCurrentCoordinate.x - 1;
                    break;

                default:
                    break;
            }

            coordinateString = `${roboCurrentCoordinate.x}, ${roboCurrentCoordinate.y}`;
        }

        if (visitedCoordinates[coordinateString]) {
            visitedCoordinates[coordinateString] =
                visitedCoordinates[coordinateString] + 1;
        } else {
            visitedCoordinates[coordinateString] = 1;
        }
    }

    return Object.keys(visitedCoordinates).length;
}
