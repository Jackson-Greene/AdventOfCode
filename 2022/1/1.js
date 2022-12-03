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

    //console.log(elfsTotal);

    let maxCalories = elfsTotal.sort((a, b) => {
        return a - b;
    })[elfsTotal.length - 1];

    return maxCalories;
}
