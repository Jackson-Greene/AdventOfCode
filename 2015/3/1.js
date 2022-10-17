export function getSolution(input) {
    //start at 0, 0 (relative)
    let currentCoordinate = { x: 0, y: 0 };

    //map of coorindates and how many times each has been visited
    let visitedCoordinates = {
        "0, 0": 2,
    };

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case "^":
                currentCoordinate.y = currentCoordinate.y + 1;

                break;
            case "v":
                currentCoordinate.y = currentCoordinate.y - 1;
                break;

            case ">":
                currentCoordinate.x = currentCoordinate.x + 1;
                break;

            case "<":
                currentCoordinate.x = currentCoordinate.x - 1;
                break;

            default:
                break;
        }

        let coordinateString = `${currentCoordinate.x}, ${currentCoordinate.y}`;

        if (visitedCoordinates[coordinateString]) {
            visitedCoordinates[coordinateString] =
                visitedCoordinates[coordinateString] + 1;
        } else {
            visitedCoordinates[coordinateString] = 1;
        }
    }

    return Object.keys(visitedCoordinates).length;
}
