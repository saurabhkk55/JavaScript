const userInput = prompt("Enter a number");
const taskInput = prompt("Press 1 for square & 2 for cube");

if (parseInt(taskInput) === 1) {
    alert(`Square of ${userInput}: ${userInput * userInput}`);
} else if (parseInt(taskInput) === 2) {
    alert(`Cube of ${userInput}: ${userInput * userInput *userInput}`);
} else {
    alert(`Invalid input!!!`);
}
