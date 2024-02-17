const character = prompt("Enter a character");

function characterFormat(whatCharacterAmI) {    // characterFormat = (whatCharacterAmI) => {
    if (whatCharacterAmI >= 'a' && whatCharacterAmI <= 'z') {
        console.log(`Entered character ${whatCharacterAmI} is a small alphabet`);
        console.log(`Its conversion: ${whatCharacterAmI.toUpperCase()}`);
    } else if (whatCharacterAmI >= 'A' && whatCharacterAmI <= 'Z') {
        console.log(`Entered character ${whatCharacterAmI} is a capital alphabet`);
    } else if (whatCharacterAmI >= 0 && whatCharacterAmI <= 9) {
        console.log(`Entered character ${whatCharacterAmI} is a digit`);
        console.log(`Its ASCII value: ${character.charCodeAt(0)}`);
    } else {
        console.log(`Entered character ${whatCharacterAmI} is a special character`);
        console.log(`Its ASCII value: ${character.charCodeAt(0)}`);
    }
}

characterFormat(character);
