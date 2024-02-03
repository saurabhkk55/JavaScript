document.addEventListener("DOMContentLoaded", function() {
    const applyChangesBtn = document.getElementById("applyChangesBtn");

    applyChangesBtn.addEventListener("click", function() {
        const selectedOption = document.getElementById("actionSelect").value;
        const userInput = document.querySelector('input[type="text"]').value;

        if(selectedOption === "create") {
            createEntry(userInput);
        }
    });

    function createEntry(entryText) {
        // Create a new <div> element
        const newEntry = document.createElement("div");
        
        // Set the text content of the new <div> element to the user input
        newEntry.textContent = entryText;
        
        // Append the new <div> element to the container with id "entriesContainer"
        const entriesContainer = document.getElementById("entriesContainer");
        entriesContainer.appendChild(newEntry);
        entriesContainer.style.backgroundColor = 'brown';
        entriesContainer.style.height = '50px';
    }
});
