const readline = require("readline");

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sortDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

read.question("Enter numbers separated by spaces: ", (input) => {
    const numbers = input.split(" ").map(Number);

    if (numbers.some(isNaN)) {
        console.log("Invalid input. Please enter only numbers separated by spaces.");
    } else {
        console.log("Sorted Array (Descending):", sortDescending(numbers));
    }
    read.close();
});
