export function getSolution(input) {
    let totalRibbonLength = 0;

    let presents = input.split("\n");

    for (let i = 0; i < presents.length; i++) {
        let dimensions = presents[i].split("x");
        let length = dimensions[0];
        let width = dimensions[1];
        let height = dimensions[2];

        let volume = length * width * height;

        let sidePerimeters = [
            2 * length + 2 * width,
            2 * width + 2 * height,
            2 * height + 2 * length,
        ];

        //ribbon required = smallest perimeter + volume

        let ribbonLength = Math.min(...sidePerimeters) + volume;

        totalRibbonLength += ribbonLength;
    }

    return totalRibbonLength;
}
