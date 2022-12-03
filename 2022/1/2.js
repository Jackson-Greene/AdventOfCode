export function getSolution(input) {
    let elfsStrings = input.split("\n\n");
    let elfsSplit = elfsStrings?.map((elfString) => {
        return elfString.split("\n");
    });

    let elfsTotal = elfsSplit?.map((elfSplit) => {
        let totalCalories = 0;
        elfSplit.forEach((calories) => {
            totalCalories += parseInt(calories);
        });

        return totalCalories;
    });

    let sortedElfsTotal = elfsTotal.sort((a, b) => {
        return a - b;
    });

    let topThreeMaxCalories = sortedElfsTotal[elfsTotal.length - 1] + sortedElfsTotal[elfsTotal.length - 2] + sortedElfsTotal[elfsTotal.length - 3];

    return topThreeMaxCalories;
}
