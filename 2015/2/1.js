export function getSolution(input) {
    let totalRequiredArea = 0;

    let presents = input.split("\n");

    for (let i = 0; i < presents.length; i++) {
        let dimensions = presents[i].split("x");
        let length = dimensions[0];
        let width = dimensions[1];
        let height = dimensions[2];

        let sideAreas = [length * width, width * height, height * length];

        //surface area + area of smallest side

        let requiredArea =
            2 * sideAreas[0] +
            2 * sideAreas[1] +
            2 * sideAreas[2] +
            Math.min(...sideAreas);

        totalRequiredArea += requiredArea;
    }

    return totalRequiredArea;
}
