console.log("Prompting User Input in JavaScript:\n\n");
// Prompting User Input in JavaScript:
// The prompt() function is used to display a dialog box that prompts the user for input.

// Step 1: Prompt the user to enter a number
const userInput = prompt("Enter a number:");

// Step 2: Convert the user input from string to number using parseInt() function
const number = parseInt(userInput);

// Step 3: Check if the input is a valid number
// isNaN() function is used to check if the input is a valid number.
if (!isNaN(number)) {
    // If the input is valid, perform a simple operation (e.g., multiply by 2)
    const result = number * 2;
    // Display the result to the user
    console.log("The result of multiplying the number by 2:", result);
} else {
    // If the input is not a valid number, display an error message
    console.log("Invalid input. Please enter a valid number.");
}
